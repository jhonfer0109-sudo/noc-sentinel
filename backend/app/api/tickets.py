from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.schemas.ticket import TicketCreate, TicketResponse
from app.services.ticket_service import TicketService
from app.repositories.ticket_repository import TicketRepository

router = APIRouter(
    prefix="/tickets",
    tags=["Tickets"]
)


@router.post("/", response_model=TicketResponse)
def create_ticket(
    data: TicketCreate,
    db: Session = Depends(get_db)
):
    return TicketService.create(db, data)


@router.get("/", response_model=list[TicketResponse])
def get_all_tickets(
    db: Session = Depends(get_db)
):
    return TicketRepository.get_all(db)


@router.get("/{ticket_id}", response_model=TicketResponse)
def get_ticket(
    ticket_id: int,
    db: Session = Depends(get_db)
):

    ticket = TicketRepository.get_by_id(db, ticket_id)

    if not ticket:
        raise HTTPException(
            status_code=404,
            detail="Ticket no encontrado"
        )

    return ticket


@router.get("/estado/{estado}", response_model=list[TicketResponse])
def tickets_por_estado(
    estado: str,
    db: Session = Depends(get_db)
):
    return TicketRepository.get_by_estado(
        db,
        estado
    )


@router.get("/prioridad/{prioridad}", response_model=list[TicketResponse])
def tickets_por_prioridad(
    prioridad: str,
    db: Session = Depends(get_db)
):
    return TicketRepository.get_by_prioridad(
        db,
        prioridad
    )


@router.get("/agente/{agente}", response_model=list[TicketResponse])
def tickets_por_agente(
    agente: str,
    db: Session = Depends(get_db)
):
    return TicketRepository.get_by_agente(
        db,
        agente
    )


@router.put("/{ticket_id}", response_model=TicketResponse)
def update_ticket(
    ticket_id: int,
    data: TicketCreate,
    db: Session = Depends(get_db)
):

    ticket = TicketService.update(
        db,
        ticket_id,
        data
    )

    if not ticket:
        raise HTTPException(
            status_code=404,
            detail="Ticket no encontrado"
        )

    return ticket


@router.delete("/{ticket_id}")
def delete_ticket(
    ticket_id: int,
    db: Session = Depends(get_db)
):

    deleted = TicketService.delete(
        db,
        ticket_id
    )

    if not deleted:
        raise HTTPException(
            status_code=404,
            detail="Ticket no encontrado"
        )

    return {
        "message": "Ticket eliminado correctamente"
    }