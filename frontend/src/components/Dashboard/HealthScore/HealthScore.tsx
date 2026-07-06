import "./HealthScore.css";

interface Props {

    score: number;

}

export default function HealthScore({

    score

}: Props) {

    let estado = "Excelente";

    let color = "#20c997";

    if (score < 95) {

        estado = "Bueno";

        color = "#ffc107";

    }

    if (score < 85) {

        estado = "Crítico";

        color = "#dc3545";

    }

    return (

        <div className="health-card">

            <h2>

                ❤️ Health Score

            </h2>

            <div
                className="health-score"
                style={{
                    color
                }}
            >

                {score.toFixed(1)}%

            </div>

            <div className="health-state">

                {estado}

            </div>

            <div className="health-bar">

                <div
                    className="health-progress"
                    style={{
                        width: `${score}%`,
                        background: color
                    }}
                />

            </div>

            <small>

                Última actualización hace 5 segundos

            </small>

        </div>

    );

}
