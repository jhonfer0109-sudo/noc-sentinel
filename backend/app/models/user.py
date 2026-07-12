from sqlalchemy import Boolean
from sqlalchemy import Column
from sqlalchemy import DateTime
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy.sql import func

from app.core.database import Base


class User(Base):

    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)

    nombre = Column(String(120), nullable=False)

    correo = Column(String(120), unique=True, index=True, nullable=False)

    password = Column(String(255), nullable=False)

    rol = Column(String(50), nullable=False)

    activo = Column(Boolean, default=True)

    created_at = Column(DateTime(timezone=True), server_default=func.now())