from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):

    # ==========================================
    # Información de la aplicación
    # ==========================================
    APP_NAME: str = "NOC Sentinel"

    VERSION: str = "1.0.0"

    # ==========================================
    # Base de datos
    # ==========================================
    DATABASE_URL: str

    # ==========================================
    # Seguridad
    # ==========================================
    SECRET_KEY: str

    ALGORITHM: str = "HS256"

    ACCESS_TOKEN_EXPIRE_MINUTES: int = 480

    # ==========================================
    # Odoo
    # ==========================================
    ODOO_URL: str = ""

    ODOO_DATABASE: str = ""

    ODOO_USERNAME: str = ""

    ODOO_PASSWORD: str = ""

    # ==========================================
    # Configuración
    # ==========================================
    model_config = SettingsConfigDict(
        env_file=".env",
        case_sensitive=True
    )


settings = Settings()