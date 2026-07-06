import "./InfrastructureGrid.css";

import InfrastructureCard from "./InfrastructureCard";
import { infrastructureData } from "./infrastructureData";

export default function InfrastructureGrid() {

    return (

        <div className="infra-section">

            <h2>Estado de Infraestructura</h2>

            <div className="infra-grid">

                {infrastructureData.map((item) => (

                    <InfrastructureCard
                        key={item.id}
                        nombre={item.nombre}
                        icono={item.icono}
                        online={item.online}
                        warning={item.warning}
                        offline={item.offline}
                        cpu={item.cpu}
                        memoria={item.memoria}
                        disco={item.disco}
                        disponibilidad={item.disponibilidad}
                        actualizado={item.actualizado}
                        color={item.color}
                    />

                ))}

            </div>

        </div>

    );

}