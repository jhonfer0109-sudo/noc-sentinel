from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from app.core.database import get_db

from app.schemas.user import UserCreate
from app.schemas.user import UserLogin

from app.services.auth_service import AuthService

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)


@router.post("/register")
def register(
    user: UserCreate,
    db: Session = Depends(get_db)
):

    try:

        return AuthService.register(
            db,
            user
        )

    except Exception as e:

        raise HTTPException(
            status_code=400,
            detail=str(e)
        )


@router.post("/login")
def login(
    credentials: UserLogin,
    db: Session = Depends(get_db)
):

    token = AuthService.login(
        db,
        credentials
    )

    if not token:

        raise HTTPException(
            status_code=401,
            detail="Credenciales inválidas"
        )

    return token