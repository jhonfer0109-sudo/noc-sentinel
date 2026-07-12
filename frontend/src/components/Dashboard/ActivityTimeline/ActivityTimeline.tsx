import "./ActivityTimeline.css";

const events = [

    {
        hora: "10:42",
        icono: "🟢",
        titulo: "Windows Server 01",
        descripcion: "Servidor estable. CPU 34%."
    },

    {
        hora: "10:37",
        icono: "🟡",
        titulo: "SQL Server 02",
        descripcion: "Consumo de CPU superior al 85%."
    },

    {
        hora: "10:31",
        icono: "🔵",
        titulo: "Nuevo Ticket",
        descripcion: "INC-254 creado automáticamente."
    },

    {
        hora: "10:22",
        icono: "🟢",
        titulo: "Firewall",
        descripcion: "Reglas sincronizadas correctamente."
    },

    {
        hora: "10:10",
        icono: "🟢",
        titulo: "Backup",
        descripcion: "Respaldo nocturno finalizado."
    }

];

export default function ActivityTimeline(){

    return(

        <div className="timeline">

            <div className="timeline-header">

                <h2>

                    📜 Actividad Reciente

                </h2>

                <span>

                    Últimos eventos

                </span>

            </div>

            {

                events.map((event,index)=>(

                    <div
                        key={index}
                        className="timeline-item"
                    >

                        <div className="timeline-time">

                            {event.hora}

                        </div>

                        <div className="timeline-icon">

                            {event.icono}

                        </div>

                        <div className="timeline-content">

                            <h4>

                                {event.titulo}

                            </h4>

                            <p>

                                {event.descripcion}

                            </p>

                        </div>

                    </div>

                ))

            }

        </div>

    )

}