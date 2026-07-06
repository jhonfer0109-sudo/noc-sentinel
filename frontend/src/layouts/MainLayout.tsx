import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar/Sidebar";
import Topbar from "../components/Topbar/Topbar";

import "./MainLayout.css";

export default function MainLayout() {

    return (

        <div className="layout">

            <Sidebar />

            <div className="contenido">

                <Topbar />

                <div className="pagina">

                    <Outlet />

                </div>

            </div>

        </div>

    );

}