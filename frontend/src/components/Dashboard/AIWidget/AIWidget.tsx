import "./AIWidget.css";

import SmartToyIcon from "@mui/icons-material/SmartToy";
import PsychologyIcon from "@mui/icons-material/Psychology";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function AIWidget() {

    return (

        <div className="ai-widget">

            <div className="ai-header">

                <div className="ai-title">

                    <SmartToyIcon />

                    <h3>Sentinel AI</h3>

                </div>

                <span className="ai-status">

                    ONLINE

                </span>

            </div>

            <div className="ai-body">

                <div className="ai-card">

                    <PsychologyIcon className="brain"/>

                    <div>

                        <h4>

                            Resumen Ejecutivo

                        </h4>

                        <p>

                            Se detectaron 2 alertas críticas y un servidor con consumo elevado de CPU.

                        </p>

                    </div>

                </div>

                <div className="ai-card">

                    <PsychologyIcon className="brain"/>

                    <div>

                        <h4>

                            Riesgo

                        </h4>

                        <p>

                            El SLA permanece estable. No se detectan incidentes de alto impacto.

                        </p>

                    </div>

                </div>

                <div className="ai-card">

                    <PsychologyIcon className="brain"/>

                    <div>

                        <h4>

                            Recomendación

                        </h4>

                        <p>

                            Revisar SQL Server 02 antes del mediodía y validar el crecimiento de CPU.

                        </p>

                    </div>

                </div>

            </div>

            <button className="ai-button">

                Abrir Sentinel AI

                <ArrowForwardIcon/>

            </button>

        </div>

    );

}