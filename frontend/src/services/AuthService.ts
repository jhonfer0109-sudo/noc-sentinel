import type {
    LoginRequest,
    LoginResponse
} from "../types/Auth";

export class AuthService {

    static async login(
        request: LoginRequest
    ): Promise<LoginResponse> {

        await new Promise(resolve =>
            setTimeout(resolve, 800)
        );

        if (

            request.username === "admin"

            &&

            request.password === "admin123"

        ) {

            return {

                success: true,

                token: "sentinel-token-demo",

                nombre: "Administrador",

                rol: "ADMIN"

            };

        }

        return {

            success: false,

            token: "",

            nombre: "",

            rol: ""

        };

    }

}