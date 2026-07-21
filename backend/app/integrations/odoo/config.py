from pydantic import BaseModel


class OdooConfig(BaseModel):

    url: str

    database: str

    username: str

    password: str