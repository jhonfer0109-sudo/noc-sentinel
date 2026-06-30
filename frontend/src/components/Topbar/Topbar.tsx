import "./Topbar.css";

import NotificationsIcon from "@mui/icons-material/Notifications";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Topbar(){

return(

<div className="topbar">

<div>

<h2>

¡Hola Carlos Gómez!

</h2>

<p>

Centro Inteligente de Operaciones

</p>

</div>

<div className="usuario">

<NotificationsIcon/>

<AccountCircleIcon/>

</div>

</div>

)

}