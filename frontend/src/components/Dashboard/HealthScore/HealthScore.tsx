import "./HealthScore.css";

interface Props {

    score:number;

}

export default function HealthScore({

    score

}:Props){

    const radius=70;

    const circumference=2*Math.PI*radius;

    const offset=circumference-(score/100)*circumference;

    let color="#20c997";

    let estado="Excelente";

    if(score<95){

        color="#ffc107";

        estado="Bueno";

    }

    if(score<85){

        color="#dc3545";

        estado="Crítico";

    }

    return(

        <div className="health-card">

            <div className="health-left">

                <svg
                    className="health-circle"
                    width="180"
                    height="180"
                >

                    <circle

                        cx="90"

                        cy="90"

                        r={radius}

                        className="health-bg"

                    />

                    <circle

                        cx="90"

                        cy="90"

                        r={radius}

                        className="health-progress"

                        style={{

                            stroke:color,

                            strokeDasharray:circumference,

                            strokeDashoffset:offset

                        }}

                    />

                    <text

                        x="90"

                        y="88"

                        className="health-value"

                    >

                        {score.toFixed(0)}%

                    </text>

                    <text

                        x="90"

                        y="112"

                        className="health-label"

                    >

                        {estado}

                    </text>

                </svg>

            </div>

            <div className="health-right">

                <h2>

                    ❤️ Health Score

                </h2>

                <p>

                    Estado general de toda la infraestructura.

                </p>

                <div className="health-list">

                    <div>

                        🟢 Disponibilidad

                        <strong>99.97%</strong>

                    </div>

                    <div>

                        🚨 Alertas críticas

                        <strong>2</strong>

                    </div>

                    <div>

                        🎫 Tickets abiertos

                        <strong>24</strong>

                    </div>

                    <div>

                        🌐 Dispositivos

                        <strong>35</strong>

                    </div>

                </div>

            </div>

        </div>

    );

}