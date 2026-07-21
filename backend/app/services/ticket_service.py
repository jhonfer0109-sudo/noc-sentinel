from sqlalchemy.orm import Session

from app.models.ticket import Ticket
from app.schemas.ticket import TicketCreate


class TicketService:

    @staticmethod
    def create(db: Session, data: TicketCreate):
        ticket = Ticket(**data.model_dump())
        db.add(ticket)
        db.commit()
        db.refresh(ticket)
        return ticket

    @staticmethod
    def get_all(db: Session):
        return (
            db.query(Ticket)
            .order_by(Ticket.created_at.desc())
            .all()
        )

    @staticmethod
    def get_by_id(db: Session, ticket_id: int):
        return (
            db.query(Ticket)
            .filter(Ticket.id == ticket_id)
            .first()
        )

    @staticmethod
    def update(db: Session, ticket_id: int, data: TicketCreate):

        ticket = (
            db.query(Ticket)
            .filter(Ticket.id == ticket_id)
            .first()
        )

        if not ticket:
            return None

        values = data.model_dump()

        for key, value in values.items():
            setattr(ticket, key, value)

        db.commit()
        db.refresh(ticket)

        return ticket

    @staticmethod
    def delete(db: Session, ticket_id: int):

        ticket = (
            db.query(Ticket)
            .filter(Ticket.id == ticket_id)
            .first()
        )

        if not ticket:
            return False

        db.delete(ticket)
        db.commit()

        return True