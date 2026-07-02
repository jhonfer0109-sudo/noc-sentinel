import { useEffect, useState } from "react";

import DashboardHeader from "../../components/Dashboard/DashboardHeader/DashboardHeader";
import MetricCard from "../../components/Dashboard/MetricCard/MetricCard";
import Charts from "../../components/Dashboard/Charts/Charts";

import { DashboardService } from "../../services/DashboardService";
import type { DashboardData } from "../../types/Dashboard";

export default function Dashboard() {

    const [dashboard,setDashboard]=useState<DashboardData | null>(null);

    useEffect(()=>{

        DashboardService.getDashboard()

            .then(setDashboard);

    },[]);

    if(!dashboard){

        return <>Cargando Dashboard...</>;

    }

    return(

        <>

            <DashboardHeader/>

            <div
                style={{
                    display:"flex",
                    gap:"20px",
                    flexWrap:"wrap",
                    marginBottom:"30px"
                }}
            >

                <MetricCard

                    titulo="Tickets"

                    valor={dashboard.ticketsAbiertos.toString()}

                    color="#20c997"

                />

                <MetricCard

                    titulo="Alertas"

                    valor={dashboard.alertas.toString()}

                    color="#dc3545"

                />

                <MetricCard

                    titulo="SLA"

                    valor={`${dashboard.sla}%`}

                    color="#ffc107"

                />

                <MetricCard

                    titulo="Clientes"

                    valor={dashboard.clientes.toString()}

                    color="#3b82f6"

                />

            </div>

            <Charts/>

        </>

    );

}