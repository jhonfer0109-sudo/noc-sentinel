import axios from "axios";

import type {
    LoginRequest,
    LoginResponse
} from "../types/Auth";

const api = axios.create({

    baseURL: "http://localhost:8000"

});

export class AuthService {

    static async login(
        request: LoginRequest
    ): Promise<LoginResponse> {

        try {

            const response = await api.post(
                "/auth/login",
                request
            );

            return {

                success: true,

                token: response.data.access_token,

                nombre: "",

                rol: ""

            };

        } catch {

            return {

                success: false,

                token: "",

                nombre: "",

                rol: ""

            };

        }

    }

}