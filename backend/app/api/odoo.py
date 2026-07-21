from fastapi import APIRouter

from app.services.odoo_service import OdooService

router = APIRouter(
    prefix="/odoo",
    tags=["Odoo"]
)


@router.get("/connect")
def connect():

    service = OdooService()

    return service.connect()