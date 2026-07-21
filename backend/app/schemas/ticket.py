from datetime import datetime
from pydantic import BaseModel


class TicketCreate(BaseModel):
    ticket_odoo: str
    titulo: str
    descripcion: str | None = None
    cliente: str | None = None
    agente: str | None = None
    estado: str = "Abierto"
    prioridad: str = "Media"
    sla: int = 100
    documentado: str = "SI"


class TicketResponse(TicketCreate):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True