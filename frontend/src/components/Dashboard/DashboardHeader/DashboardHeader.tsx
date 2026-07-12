import "./DashboardHeader.css";

import CloudDoneIcon from "@mui/icons-material/CloudDone";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import LanguageIcon from "@mui/icons-material/Language";
import PersonIcon from "@mui/icons-material/Person";

export default function DashboardHeader() {

    const fecha = new Date().toLocaleString("es-CO");

    return (

        <div className="dashboard-header">

            <div className="dashboard-header-title">

                <h1>🛡️ NOC Sentinel Enterprise</h1>

                <p>Centro Inteligente de Operaciones</p>

            </div>

            <div className="dashboard-header-info">

                <div className="header-item">

                    <CloudDoneIcon />

                    <div>

                        <small>Estado</small>

                        <strong>Operativo</strong>

                    </div>

                </div>

                <div className="header-item">

                    <LanguageIcon />

                    <div>

                        <small>Infraestructura</small>

                        <strong>35 Dispositivos</strong>

                    </div>

                </div>

                <div className="header-item">

                    <AccessTimeFilledIcon />

                    <div>

                        <small>Actualizado</small>

                        <strong>{fecha}</strong>

                    </div>

                </div>

                <div className="header-item">

                    <PersonIcon />

                    <div>

                        <small>Usuario</small>

                        <strong>Administrador</strong>

                    </div>

                </div>

            </div>

        </div>

    );

}