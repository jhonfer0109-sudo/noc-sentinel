import Sidebar from "../components/Sidebar/Sidebar";
import Topbar from "../components/Topbar/Topbar";
import Dashboard from "../pages/Dashboard/Dashboard";
import "./MainLayout.css";

export default function MainLayout() {

    return (

        <div className="layout">

            <Sidebar/>

            <div className="contenido">

                <Topbar/>

                <div className="pagina">

                    <Dashboard/>

                </div>

            </div>

        </div>

    );

}