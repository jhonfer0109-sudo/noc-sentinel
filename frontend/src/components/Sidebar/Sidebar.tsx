import "./Sidebar.css";

import DashboardIcon from "@mui/icons-material/Dashboard";

import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";

import WarningAmberIcon from "@mui/icons-material/WarningAmber";

import GroupsIcon from "@mui/icons-material/Groups";

import AnalyticsIcon from "@mui/icons-material/Analytics";

import SettingsIcon from "@mui/icons-material/Settings";

import ShieldIcon from "@mui/icons-material/Shield";

export default function Sidebar(){

return(

<div className="sidebar">

<div className="logo">

<ShieldIcon/>

<span>NOC Sentinel</span>

</div>

<nav>

<button>

<DashboardIcon/>

Inicio

</button>

<button>

<ConfirmationNumberIcon/>

Tickets

</button>

<button>

<WarningAmberIcon/>

Alertas

</button>

<button>

<GroupsIcon/>

Clientes

</button>

<button>

<AnalyticsIcon/>

Reportes

</button>

<button>

<SettingsIcon/>

Configuración

</button>

</nav>

</div>

)

}