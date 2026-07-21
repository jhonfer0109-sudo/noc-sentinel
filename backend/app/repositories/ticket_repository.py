from sqlalchemy.orm import Session

from app.models.ticket import Ticket


class TicketRepository:

    @staticmethod
    def get_all(db: Session):
        return (
            db.query(Ticket)
            .order_by(Ticket.created_at.desc())
            .all()
        )

    @staticmethod
    def get_by_id(
        db: Session,
        ticket_id: int
    ):
        return (
            db.query(Ticket)
            .filter(Ticket.id == ticket_id)
            .first()
        )

    @staticmethod
    def get_by_estado(
        db: Session,
        estado: str
    ):
        return (
            db.query(Ticket)
            .filter(Ticket.estado == estado)
            .order_by(Ticket.created_at.desc())
            .all()
        )

    @staticmethod
    def get_by_prioridad(
        db: Session,
        prioridad: str
    ):
        return (
            db.query(Ticket)
            .filter(Ticket.prioridad == prioridad)
            .order_by(Ticket.created_at.desc())
            .all()
        )

    @staticmethod
    def get_by_agente(
        db: Session,
        agente: str
    ):
        return (
            db.query(Ticket)
            .filter(Ticket.agente == agente)
            .order_by(Ticket.created_at.desc())
            .all()
        )