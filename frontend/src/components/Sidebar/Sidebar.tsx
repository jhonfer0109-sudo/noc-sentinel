import "./Sidebar.css";

import { NavLink } from "react-router-dom";

import DashboardIcon from "@mui/icons-material/Dashboard";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import GroupsIcon from "@mui/icons-material/Groups";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import SettingsIcon from "@mui/icons-material/Settings";
import ShieldIcon from "@mui/icons-material/Shield";

export default function Sidebar() {

    return (

        <div className="sidebar">

            <div className="logo">

                <ShieldIcon />

                <span>NOC Sentinel</span>

            </div>

            <nav>

                <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                        isActive ? "menu-link active" : "menu-link"
                    }
                >
                    <DashboardIcon />
                    <span>Inicio</span>
                </NavLink>

                <NavLink
                    to="/tickets"
                    className={({ isActive }) =>
                        isActive ? "menu-link active" : "menu-link"
                    }
                >
                    <ConfirmationNumberIcon />
                    <span>Tickets</span>
                </NavLink>

                <NavLink
                    to="/alerts"
                    className={({ isActive }) =>
                        isActive ? "menu-link active" : "menu-link"
                    }
                >
                    <WarningAmberIcon />
                    <span>Alertas</span>
                </NavLink>

                <NavLink
                    to="/clients"
                    className={({ isActive }) =>
                        isActive ? "menu-link active" : "menu-link"
                    }
                >
                    <GroupsIcon />
                    <span>Clientes</span>
                </NavLink>

                <NavLink
                    to="/reports"
                    className={({ isActive }) =>
                        isActive ? "menu-link active" : "menu-link"
                    }
                >
                    <AnalyticsIcon />
                    <span>Reportes</span>
                </NavLink>

                <NavLink
                    to="/settings"
                    className={({ isActive }) =>
                        isActive ? "menu-link active" : "menu-link"
                    }
                >
                    <SettingsIcon />
                    <span>Configuración</span>
                </NavLink>

            </nav>

        </div>

    );

}