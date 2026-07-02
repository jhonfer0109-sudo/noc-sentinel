import "./TicketTable.css";

import { useEffect, useMemo, useState } from "react";

import { TicketService } from "../../../services/TicketService";
import type { Ticket } from "../../../types/Ticket";

import TicketDrawer from "../TicketDrawer/TicketDrawer";
import NewTicketModal from "../NewTicketModal/NewTicketModal";

export default function TicketTable() {

    const [tickets, setTickets] = useState<Ticket[]>([]);
    const [busqueda, setBusqueda] = useState("");

    const [ticketSeleccionado, setTicketSeleccionado] = useState<Ticket | null>(null);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {

        TicketService.getTickets().then(setTickets);

    }, []);

    const ticketsFiltrados = useMemo(() => {

        return tickets.filter(ticket =>

            ticket.numero.toLowerCase().includes(busqueda.toLowerCase()) ||

            ticket.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||

            ticket.cliente.toLowerCase().includes(busqueda.toLowerCase())

        );

    }, [tickets, busqueda]);

    return (

        <>

            <div className="ticket-table">

                <div className="ticket-header">

                    <h2>Centro de Tickets</h2>

                    <div className="ticket-actions">

                        <button
                            className="btn-new"
                            onClick={() => setModalOpen(true)}
                        >
                            + Nuevo Ticket
                        </button>

                        <input

                            type="text"

                            placeholder="Buscar ticket..."

                            value={busqueda}

                            onChange={(e) => setBusqueda(e.target.value)}

                        />

                    </div>

                </div>

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

                        {ticketsFiltrados.map(ticket => (

                            <tr key={ticket.id}>

                                <td>{ticket.numero}</td>

                                <td>{ticket.titulo}</td>

                                <td>{ticket.cliente}</td>

                                <td>

                                    <span className={`badge prioridad-${ticket.prioridad.toLowerCase()}`}>

                                        {ticket.prioridad}

                                    </span>

                                </td>

                                <td>

                                    <span className={`badge estado-${ticket.estado.toLowerCase().replace(" ", "-")}`}>

                                        {ticket.estado}

                                    </span>

                                </td>

                                <td>

                                    <div className="sla-container">

                                        <div className="sla-bar">

                                            <div

                                                className="sla-fill"

                                                style={{

                                                    width: `${ticket.sla}%`

                                                }}

                                            />

                                        </div>

                                        <span>{ticket.sla}%</span>

                                    </div>

                                </td>

                                <td className="acciones">

                                    <button

                                        className="btn-ver"

                                        onClick={() => {

                                            setTicketSeleccionado(ticket);

                                            setDrawerOpen(true);

                                        }}

                                    >

                                        👁 Ver

                                    </button>

                                    <button

                                        className="btn-editar"

                                    >

                                        ✏ Editar

                                    </button>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

            <TicketDrawer

                open={drawerOpen}

                ticket={ticketSeleccionado}

                onClose={() => setDrawerOpen(false)}

            />

            <NewTicketModal

                open={modalOpen}

                onClose={() => setModalOpen(false)}

            />

        </>

    );

}