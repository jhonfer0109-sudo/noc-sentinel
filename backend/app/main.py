from fastapi import FastAPI

from app.api.auth import router as auth_router

from app.core.config import settings
from app.core.database import Base
from app.core.database import engine

import app.models.user

Base.metadata.create_all(bind=engine)

app = FastAPI(

    title=settings.APP_NAME,

    version=settings.VERSION

)

app.include_router(auth_router)


@app.get("/")

def root():

    return {

        "message": "NOC Sentinel API",

        "version": settings.VERSION

    }