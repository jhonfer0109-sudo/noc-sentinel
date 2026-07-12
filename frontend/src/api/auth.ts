import api from "./api";

export interface LoginRequest{

    correo:string;

    password:string;

}

export async function login(

    data:LoginRequest

){

    const response = await api.post(

        "/auth/login",

        data

    );

    return response.data;

}