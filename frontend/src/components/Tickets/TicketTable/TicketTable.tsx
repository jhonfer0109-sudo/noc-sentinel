import "./TicketTable.css";

import { useEffect, useMemo, useState } from "react";

import TicketFilters from "../TicketFilters/TicketFilters";
import TicketModal from "../TicketModal/TicketModal";

import { TicketService } from "../../../services/TicketService";

import type { Ticket } from "../../../types/Ticket";

export default function TicketTable(){

    const [tickets,setTickets]=useState<Ticket[]>([]);

    const [open,setOpen]=useState(false);

    const [search,setSearch]=useState("");

    const [status,setStatus]=useState("");

    const [priority,setPriority]=useState("");

    useEffect(()=>{

        TicketService.getTickets()

            .then(setTickets);

    },[]);

    function addTicket(ticket:Ticket){

        setTickets(previous=>[ticket,...previous]);

    }

    const filtered=useMemo(()=>{

        return tickets.filter(ticket=>{

            const matchSearch=

                ticket.id.toLowerCase().includes(search.toLowerCase()) ||

                ticket.titulo.toLowerCase().includes(search.toLowerCase()) ||

                ticket.cliente.toLowerCase().includes(search.toLowerCase());

            const matchStatus=

                status==="" ||

                ticket.estado===status;

            const matchPriority=

                priority==="" ||

                ticket.prioridad===priority;

            return matchSearch && matchStatus && matchPriority;

        });

    },[tickets,search,status,priority]);

    return(

        <>

            <div className="ticket-container">

                <div className="ticket-header">

                    <h2>

                        Centro de Tickets

                    </h2>

                    <button

                        className="new-ticket"

                        onClick={()=>setOpen(true)}

                    >

                        + Nuevo Ticket

                    </button>

                </div>

                <TicketFilters

                    search={search}

                    status={status}

                    priority={priority}

                    onSearch={setSearch}

                    onStatus={setStatus}

                    onPriority={setPriority}

                />

                <table>

                    <thead>

                        <tr>

                            <th>ID</th>

                            <th>Título</th>

                            <th>Cliente</th>

                            <th>Prioridad</th>

                            <th>Estado</th>

                            <th>SLA</th>

                            <th>Acciones</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            filtered.map(ticket=>(

                                <tr key={ticket.id}>

                                    <td>{ticket.id}</td>

                                    <td>{ticket.titulo}</td>

                                    <td>{ticket.cliente}</td>

                                    <td>{ticket.prioridad}</td>

                                    <td>{ticket.estado}</td>

                                    <td>

                                        <div className="sla-bar">

                                            <div

                                                className="sla-fill"

                                                style={{

                                                    width:`${ticket.sla}%`

                                                }}

                                            />

                                        </div>

                                        {ticket.sla}%

                                    </td>

                                    <td>

                                        <button className="btn-view">

                                            Ver

                                        </button>

                                        <button className="btn-edit">

                                            Editar

                                        </button>

                                    </td>

                                </tr>

                            ))

                        }

                    </tbody>

                </table>

            </div>

            <TicketModal

                open={open}

                onClose={()=>setOpen(false)}

                onSave={addTicket}

            />

        </>

    );

}