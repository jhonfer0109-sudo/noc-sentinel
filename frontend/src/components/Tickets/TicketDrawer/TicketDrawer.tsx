import "./TicketDrawer.css";
import type { Ticket } from "../../../types/Ticket";

interface Props {
    open: boolean;
    ticket: Ticket | null;
    onClose: () => void;
}

export default function TicketDrawer({
    open,
    ticket,
    onClose
}: Props) {

    if (!open || !ticket) return null;

    return (
        <>
            <div
                className="drawer-overlay"
                onClick={onClose}
            />

            <div className="drawer">

                <div className="drawer-header">

                    <div>

                        <h2>{ticket.numero}</h2>

                        <p>{ticket.titulo}</p>

                    </div>

                    <button onClick={onClose}>✖</button>

                </div>

                <div className="drawer-info">

                    <div className="info-card">

                        <span>👤 Cliente</span>

                        <strong>{ticket.cliente}</strong>

                    </div>

                    <div className="info-card">

                        <span>👨‍💻 Técnico</span>

                        <strong>{ticket.tecnico}</strong>

                    </div>

                    <div className="info-card">

                        <span>📅 Fecha</span>

                        <strong>{ticket.fecha}</strong>

                    </div>

                    <div className="info-card">

                        <span>🚦 Estado</span>

                        <strong>{ticket.estado}</strong>

                    </div>

                    <div className="info-card">

                        <span>🔥 Prioridad</span>

                        <strong>{ticket.prioridad}</strong>

                    </div>

                    <div className="info-card">

                        <span>⏱ SLA</span>

                        <strong>{ticket.sla}%</strong>

                    </div>

                </div>

                <div className="descripcion">

                    <h3>Descripción</h3>

                    <p>{ticket.descripcion}</p>

                </div>

                <div className="drawer-buttons">

                    <button className="editar">

                        ✏ Editar Ticket

                    </button>

                    <button
                        className="cerrar"
                        onClick={onClose}
                    >

                        Cerrar

                    </button>

                </div>

            </div>

        </>
    );

}