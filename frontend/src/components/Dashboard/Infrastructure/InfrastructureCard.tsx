    import "./InfrastructureCard.css";

    interface Props {
        nombre: string;
        icono: string;
        online: number;
        warning: number;
        offline: number;
        cpu: number;
        memoria: number;
        disco: number;
        disponibilidad: string;
        actualizado: string;
        color: string;
    }

    export default function InfrastructureCard({
        nombre,
        icono,
        online,
        warning,
        offline,
        cpu,
        memoria,
        disco,
        disponibilidad,
        actualizado,
        color
    }: Props) {

        return (

            <div className="infra-card">

                <div className="infra-header">

                    <div className="infra-title">

                        <span className="infra-icon">
                            {icono}
                        </span>

                        <h3>{nombre}</h3>

                    </div>

                    <div
                        className="infra-dot"
                        style={{ background: color }}
                    />

                </div>

                <div className="infra-stats">

                    <div>
                        <span>🟢 Online</span>
                        <strong>{online}</strong>
                    </div>

                    <div>
                        <span>🟡 Warning</span>
                        <strong>{warning}</strong>
                    </div>

                    <div>
                        <span>🔴 Offline</span>
                        <strong>{offline}</strong>
                    </div>

                </div>

                <div className="infra-metrics">

                    <div>
                        <span>CPU</span>
                        <strong>{cpu}%</strong>
                    </div>

                    <div>
                        <span>Memoria</span>
                        <strong>{memoria}%</strong>
                    </div>

                    <div>
                        <span>Disco</span>
                        <strong>{disco}%</strong>
                    </div>

                </div>

                <div className="infra-footer">

                    <div>

                        <small>Disponibilidad</small>

                        <strong>{disponibilidad}</strong>

                    </div>

                    <div style={{ textAlign: "right" }}>

                        <small>Actualizado</small>

                        <strong>{actualizado}</strong>

                    </div>

                </div>

            </div>

        );

    }