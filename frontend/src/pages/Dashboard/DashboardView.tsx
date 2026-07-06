import ExecutiveSummary from "../../components/Dashboard/ExecutiveSummary/ExecutiveSummary";
import HealthScore from "../../components/Dashboard/HealthScore/HealthScore";
import Charts from "../../components/Dashboard/Charts/Charts";
import AIWidget from "../../components/Dashboard/AIWidget/AIWidget";
import InfrastructureGrid from "../../components/Dashboard/Infrastructure/InfrastructureGrid";
import TicketTable from "../../components/Tickets/TicketTable/TicketTable";

import type { DashboardData } from "../../types/Dashboard";

import "./Dashboard.css";

interface Props {

    dashboard: DashboardData;

    healthScore: number;

}

export default function DashboardView({

    dashboard,

    healthScore

}: Props) {

    return (

        <>

            <ExecutiveSummary

                tickets={dashboard.ticketsAbiertos}

                alertas={dashboard.alertas}

                clientes={dashboard.clientes}

                sla={dashboard.sla}

            />

            <HealthScore score={healthScore} />

            <div className="dashboard-row">

                <div className="dashboard-chart">

                    <Charts />

                </div>

                <AIWidget />

            </div>

            <InfrastructureGrid />

            <TicketTable />

        </>

    )

}