export interface LoginRequest {

    correo: string;

    password: string;

}

export interface LoginResponse {

    success: boolean;

    token: string;

    nombre: string;

    rol: string;

}