from pydantic_settings import BaseSettings


class Settings(BaseSettings):

    APP_NAME: str = "NOC Sentinel"

    VERSION: str = "1.0.0"

    DATABASE_URL: str

    SECRET_KEY: str

    ALGORITHM: str = "HS256"

    ACCESS_TOKEN_EXPIRE_MINUTES: int = 480

    class Config:

        env_file = ".env"


settings = Settings()