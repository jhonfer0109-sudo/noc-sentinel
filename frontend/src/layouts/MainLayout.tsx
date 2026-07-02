import AIWidget from "../components/Dashboard/AIWidget/AIWidget";
import Sidebar from "../components/Sidebar/Sidebar";
import Topbar from "../components/Topbar/Topbar";

import DashboardHeader from "../components/Dashboard/DashboardHeader/DashboardHeader";
import MetricCard from "../components/Dashboard/MetricCard/MetricCard";
import Charts from "../components/Dashboard/Charts/Charts";

import TicketTable from "../components/Tickets/TicketTable/TicketTable";

import "./MainLayout.css";

export default function MainLayout() {

    return (

        <div className="layout">

            <Sidebar />

            <div className="contenido">

                <Topbar />

                <div className="pagina">

                    <DashboardHeader />

                    <div
                        style={{
                            display: "flex",
                            gap: "20px",
                            flexWrap: "wrap"
                        }}
                    >

                        <MetricCard
                            titulo="Tickets"
                            valor="24"
                            color="#20c997"
                        />

                        <MetricCard
                            titulo="Alertas"
                            valor="6"
                            color="#dc3545"
                        />

                        <MetricCard
                            titulo="SLA"
                            valor="98%"
                            color="#ffc107"
                        />

                        <MetricCard
                            titulo="Clientes"
                            valor="15"
                            color="#3b82f6"
                        />

                    </div>

                    <div
    style={{
        display:"flex",
        gap:"20px",
        alignItems:"stretch",
        marginTop:"30px"
    }}
>

    <div
        style={{
            flex:1
        }}
    >

        <Charts/>

    </div>

    <AIWidget/>

</div>

                    <TicketTable />

                </div>

            </div>

        </div>

    );

}