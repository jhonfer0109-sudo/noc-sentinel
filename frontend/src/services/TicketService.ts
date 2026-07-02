import { mockTickets } from "../mock/mockTickets";

import type { Ticket } from "../types/Ticket";

export class TicketService {

    static async getTickets(): Promise<Ticket[]> {

        return mockTickets;

    }

}