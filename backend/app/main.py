from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="NOC Sentinel API",
    description="Backend del sistema NOC Sentinel",
    version="0.1.0"
)

# Configuración CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def inicio():
    return {
        "application": "NOC Sentinel",
        "version": "0.1.0",
        "status": "ONLINE",
        "mode": "DEMO"
    }

@app.get("/health")
def health():
    return {
        "status": "OK"
    }