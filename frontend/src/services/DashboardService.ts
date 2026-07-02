import type { DashboardData } from "../types/Dashboard";

export class DashboardService {

    static async getDashboard(): Promise<DashboardData>{

        return{

            ticketsAbiertos:24,

            ticketsCerrados:132,

            alertas:6,

            clientes:15,

            sla:98

        };

    }

}