import type { Ticket } from "../types/Ticket";

export class TicketService{

    static async getTickets():Promise<Ticket[]>{

        await new Promise(resolve=>setTimeout(resolve,300));

        return[

            {
                id:"INC-1001",
                titulo:"Servidor de correo fuera de línea",
                cliente:"Banco Nacional",
                prioridad:"Alta",
                estado:"Abierto",
                sla:95
            },

            {
                id:"INC-1002",
                titulo:"VPN intermitente",
                cliente:"Seguros Andina",
                prioridad:"Media",
                estado:"En Progreso",
                sla:88
            },

            {
                id:"INC-1003",
                titulo:"Actualización Windows",
                cliente:"Grupo Éxito",
                prioridad:"Baja",
                estado:"Resuelto",
                sla:100
            },

            {
                id:"INC-1004",
                titulo:"Caída SQL Server",
                cliente:"EPS Salud",
                prioridad:"Alta",
                estado:"Abierto",
                sla:74
            }

        ];

    }

}