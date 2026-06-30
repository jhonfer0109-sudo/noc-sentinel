import "./RecentTickets.css";

const tickets = [
  {
    id: "INC0001",
    cliente: "Bancolombia",
    prioridad: "Alta",
    estado: "Abierto",
    sla: "12 min",
  },
  {
    id: "INC0002",
    cliente: "Éxito",
    prioridad: "Media",
    estado: "En curso",
    sla: "45 min",
  },
  {
    id: "INC0003",
    cliente: "Celsia",
    prioridad: "Baja",
    estado: "Cerrado",
    sla: "OK",
  },
];

export default function RecentTickets() {
  return (
    <div className="tickets-card">
      <h2>🎫 Últimos Tickets</h2>

      <table>
        <thead>
          <tr>
            <th>Ticket</th>
            <th>Cliente</th>
            <th>Prioridad</th>
            <th>Estado</th>
            <th>SLA</th>
          </tr>
        </thead>

        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.id}>
              <td>{ticket.id}</td>
              <td>{ticket.cliente}</td>
              <td>{ticket.prioridad}</td>
              <td>{ticket.estado}</td>
              <td>{ticket.sla}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}