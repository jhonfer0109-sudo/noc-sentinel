from sqlalchemy.orm import Session

from app.core.security import create_access_token
from app.core.security import hash_password
from app.core.security import verify_password

from app.models.user import User

from app.repositories.user_repository import UserRepository

from app.schemas.user import UserCreate
from app.schemas.user import UserLogin


class AuthService:

    @staticmethod
    def register(
        db: Session,
        data: UserCreate
    ):

        if UserRepository.get_by_email(
            db,
            data.correo
        ):

            raise Exception(
                "El usuario ya existe."
            )

        user = User(

            nombre=data.nombre,

            correo=data.correo,

            password=hash_password(
                data.password
            ),

            rol=data.rol,

            activo=True

        )

        return UserRepository.create(
            db,
            user
        )

    @staticmethod
    def login(
        db: Session,
        credentials: UserLogin
    ):

        user = UserRepository.get_by_email(
            db,
            credentials.correo
        )

        if not user:

            return None

        if not verify_password(

            credentials.password,

            user.password

        ):

            return None

        token = create_access_token(

            {
                "sub": user.correo,

                "rol": user.rol,

                "nombre": user.nombre
            }

        )

        return {

            "access_token": token,

            "token_type": "bearer"

        }