import { useEffect, useState } from "react";

import DashboardHeader from "../../components/Dashboard/DashboardHeader/DashboardHeader";

import DashboardView from "./DashboardView";

import { DashboardService } from "../../services/DashboardService";
import { HealthScoreService } from "../../services/HealthScoreService";

import type { DashboardData } from "../../types/Dashboard";

export default function Dashboard() {

    const [dashboard, setDashboard] = useState<DashboardData | null>(null);

    useEffect(() => {

        DashboardService
            .getDashboard()
            .then(setDashboard);

    }, []);

    if (!dashboard) {

        return <h2>Cargando Dashboard...</h2>;

    }

    const healthScore = HealthScoreService.calculate(

        dashboard.sla,

        dashboard.ticketsAbiertos,

        dashboard.alertas,

        dashboard.clientes

    );

    return (

        <>

            <DashboardHeader />

            <DashboardView

                dashboard={dashboard}

                healthScore={healthScore}

            />

        </>

    );

}