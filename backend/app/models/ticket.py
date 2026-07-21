from sqlalchemy import Column
from sqlalchemy import DateTime
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy.sql import func

from app.core.database import Base


class Ticket(Base):

    __tablename__ = "tickets"

    id = Column(Integer, primary_key=True, index=True)

    ticket_odoo = Column(String(50), unique=True, nullable=False)

    titulo = Column(String(255), nullable=False)

    descripcion = Column(String(1000))

    cliente = Column(String(150))

    agente = Column(String(150))

    estado = Column(String(50))

    prioridad = Column(String(50))

    sla = Column(Integer, default=100)

    documentado = Column(String(10), default="SI")

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now()
    )