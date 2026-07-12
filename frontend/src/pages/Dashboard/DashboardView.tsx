import DashboardHeader from "../../components/Dashboard/DashboardHeader/DashboardHeader";
import ExecutiveSummary from "../../components/Dashboard/ExecutiveSummary/ExecutiveSummary";
import HealthScore from "../../components/Dashboard/HealthScore/HealthScore";
import Charts from "../../components/Dashboard/Charts/Charts";
import AIWidget from "../../components/Dashboard/AIWidget/AIWidget";
import MonitoringCenter from "../../components/Dashboard/MonitoringCenter/MonitoringCenter";
import InfrastructureGrid from "../../components/Dashboard/Infrastructure/InfrastructureGrid";
import TicketTable from "../../components/Tickets/TicketTable/TicketTable";
import ActivityTimeline from "../../components/Dashboard/ActivityTimeline/ActivityTimeline";

import type { DashboardData } from "../../types/Dashboard";

import "./Dashboard.css";

interface Props{

    dashboard:DashboardData;

    healthScore:number;

}

export default function DashboardView({

    dashboard,

    healthScore

}:Props){

    return(

        <div className="dashboard">

            <DashboardHeader/>

            <ExecutiveSummary

                tickets={dashboard.ticketsAbiertos}

                alertas={dashboard.alertas}

                clientes={dashboard.clientes}

                sla={dashboard.sla}

            />

            <HealthScore

                score={healthScore}

            />

            <div className="dashboard-row">

                <div className="dashboard-chart">

                    <Charts/>

                </div>

                <div className="dashboard-ai">

                    <AIWidget/>

                </div>

            </div>

            <MonitoringCenter/>

            <InfrastructureGrid/>

            <ActivityTimeline/>

            <TicketTable/>

        </div>

    );

}