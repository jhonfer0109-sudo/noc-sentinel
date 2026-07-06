import "./LoginForm.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthService } from "../../../services/AuthService";

export default function LoginForm() {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");

    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    async function iniciarSesion() {

        setLoading(true);

        setError("");

        const response = await AuthService.login({

            username,

            password

        });

        setLoading(false);

        if (!response.success) {

            setError("Usuario o contraseña incorrectos");

            return;

        }

        localStorage.setItem("token", response.token);

        localStorage.setItem("nombre", response.nombre);

        localStorage.setItem("rol", response.rol);

        navigate("/");

    }

    return (

        <div className="login-form">

            <input

                type="text"

                placeholder="Usuario"

                value={username}

                onChange={(e) => setUsername(e.target.value)}

            />

            <input

                type="password"

                placeholder="Contraseña"

                value={password}

                onChange={(e) => setPassword(e.target.value)}

            />

            {

                error && (

                    <div className="login-error">

                        {error}

                    </div>

                )

            }

            <button

                onClick={iniciarSesion}

                disabled={loading}

            >

                {

                    loading

                        ? "Ingresando..."

                        : "Iniciar sesión"

                }

            </button>

        </div>

    );

}