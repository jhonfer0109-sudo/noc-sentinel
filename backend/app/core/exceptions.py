from fastapi import HTTPException


class TicketNotFoundException(HTTPException):

    def __init__(self):

        super().__init__(
            status_code=404,
            detail="Ticket no encontrado"
        )


class UserNotFoundException(HTTPException):

    def __init__(self):

        super().__init__(
            status_code=404,
            detail="Usuario no encontrado"
        )


class InvalidCredentialsException(HTTPException):

    def __init__(self):

        super().__init__(
            status_code=401,
            detail="Credenciales inválidas"
        )
    