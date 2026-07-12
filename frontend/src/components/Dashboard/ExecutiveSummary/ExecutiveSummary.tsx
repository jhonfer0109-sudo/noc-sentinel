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

                <div className="summary-top">

                    <span className="summary-icon">❤️</span>

                    <span className="trend positive">▲ +1.4%</span>

                </div>

                <h4>Health Score</h4>

                <strong>98.7%</strong>

                <small>Estado excelente</small>

            </div>

            <div className="summary-card danger">

                <div className="summary-top">

                    <span className="summary-icon">🚨</span>

                    <span className="trend negative">▼ +2</span>

                </div>

                <h4>Alertas críticas</h4>

                <strong>{alertas}</strong>

                <small>Requieren atención</small>

            </div>

            <div className="summary-card primary">

                <div className="summary-top">

                    <span className="summary-icon">🎫</span>

                    <span className="trend positive">▲ +12%</span>

                </div>

                <h4>Tickets abiertos</h4>

                <strong>{tickets}</strong>

                <small>Últimas 24 horas</small>

            </div>

            <div className="summary-card info">

                <div className="summary-top">

                    <span className="summary-icon">🖥️</span>

                    <span className="trend neutral">35 activos</span>

                </div>

                <h4>Dispositivos</h4>

                <strong>{clientes}</strong>

                <small>Clientes monitoreados</small>

            </div>

            <div className="summary-card warning">

                <div className="summary-top">

                    <span className="summary-icon">📈</span>

                    <span className="trend positive">▲ Estable</span>

                </div>

                <h4>SLA</h4>

                <strong>{sla}%</strong>

                <small>Cumplimiento mensual</small>

            </div>

        </div>

    );

}