import "./Topbar.css";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Topbar() {

    const navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState(false);

    const nombre = localStorage.getItem("nombre") || "Administrador";

    const rol = localStorage.getItem("rol") || "Administrador";

    function cerrarSesion() {

        localStorage.removeItem("token");
        localStorage.removeItem("nombre");
        localStorage.removeItem("rol");

        navigate("/login");

    }

    return (

        <div className="topbar">

            <div>

                <h2>

                    ¡Hola {nombre}!

                </h2>

                <p>

                    Centro Inteligente de Operaciones

                </p>

            </div>

            <div className="topbar-right">

                <div className="notification">

                    <NotificationsIcon />

                    <span className="badge">

                        3

                    </span>

                </div>

                <div
                    className="profile"
                    onClick={() => setMenuOpen(!menuOpen)}
                >

                    <AccountCircleIcon />

                    <div className="profile-info">

                        <strong>{nombre}</strong>

                        <small>{rol}</small>

                    </div>

                    <ArrowDropDownIcon />

                    {

                        menuOpen && (

                            <div className="profile-menu">

                                <button onClick={cerrarSesion}>

                                    <LogoutIcon />

                                    Cerrar sesión

                                </button>

                            </div>

                        )

                    }

                </div>

            </div>

        </div>

    );

}