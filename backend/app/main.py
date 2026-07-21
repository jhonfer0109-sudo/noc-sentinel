from datetime import datetime

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import settings
from app.core.database import Base, engine

# ==========================
# Modelos
# ==========================
import app.models.user
import app.models.ticket

# ==========================
# Routers
# ==========================
from app.api.auth import router as auth_router
from app.api.tickets import router as ticket_router
from app.api.odoo import router as odoo_router

# ==========================
# Crear tablas
# ==========================
Base.metadata.create_all(bind=engine)

# ==========================
# Crear aplicación
# ==========================
app = FastAPI(
    title=settings.APP_NAME,
    version=settings.VERSION,
    description="NOC Sentinel API",
    docs_url="/docs",
    redoc_url="/redoc",
)

# ==========================
# CORS
# ==========================
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ==========================
# Registrar Routers
# ==========================
app.include_router(auth_router)
app.include_router(ticket_router)
app.include_router(odoo_router)

# ==========================
# Endpoints del sistema
# ==========================

@app.get("/", tags=["Sistema"])
def root():
    return {
        "application": settings.APP_NAME,
        "version": settings.VERSION,
        "status": "online",
        "database": "connected",
        "message": "Bienvenido a NOC Sentinel API"
    }


@app.get("/health", tags=["Sistema"])
def health():
    return {
        "status": "healthy",
        "database": "connected",
        "server_time": datetime.now().isoformat(),
        "version": settings.VERSION
    }