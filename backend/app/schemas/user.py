from pydantic import BaseModel
from pydantic import EmailStr


class UserCreate(BaseModel):

    nombre: str

    correo: EmailStr

    password: str

    rol: str


class UserLogin(BaseModel):

    correo: EmailStr

    password: str


class UserResponse(BaseModel):

    id: int

    nombre: str

    correo: str

    rol: str

    activo: bool

    class Config:

        from_attributes = True