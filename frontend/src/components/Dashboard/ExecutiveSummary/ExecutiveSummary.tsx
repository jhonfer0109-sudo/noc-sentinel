import "./ExecutiveSummary.css";

interface Props {

    tickets: number;

    alertas: number;

    clientes: number;

    sla: number;

}

export default function ExecutiveSummary({

    tickets,

    alertas,

    clientes,

    sla

}: Props) {

    return (

        <div className="executive-summary">

            <div className="summary-card success">

                <span className="summary-icon">🟢</span>

                <div>

                    <h4>Salud General</h4>

                    <strong>98.7%</strong>

                </div>

            </div>

            <div className="summary-card danger">

                <span className="summary-icon">🚨</span>

                <div>

                    <h4>Alertas</h4>

                    <strong>{alertas}</strong>

                </div>

            </div>

            <div className="summary-card primary">

                <span className="summary-icon">🎫</span>

                <div>

                    <h4>Tickets</h4>

                    <strong>{tickets}</strong>

                </div>

            </div>

            <div className="summary-card info">

                <span className="summary-icon">👥</span>

                <div>

                    <h4>Clientes</h4>

                    <strong>{clientes}</strong>

                </div>

            </div>

            <div className="summary-card warning">

                <span className="summary-icon">📈</span>

                <div>

                    <h4>SLA</h4>

                    <strong>{sla}%</strong>

                </div>

            </div>

        </div>

    );

}