import "./InfrastructureStatus.css";

const services = [

    {
        nombre: "Servidores",
        estado: "Online",
        color: "#20c997",
        icono: "🖥️"
    },

    {
        nombre: "Red",
        estado: "Operativa",
        color: "#20c997",
        icono: "🌐"
    },

    {
        nombre: "Firewall",
        estado: "Activo",
        color: "#20c997",
        icono: "🔥"
    },

    {
        nombre: "Base de Datos",
        estado: "Advertencia",
        color: "#ffc107",
        icono: "💾"
    }

];

export default function InfrastructureStatus() {

    return (

        <div className="infra-card">

            <h2>Estado de Infraestructura</h2>

            {

                services.map((item,index)=>(

                    <div
                        key={index}
                        className="infra-item"
                    >

                        <div>

                            <span className="infra-icon">

                                {item.icono}

                            </span>

                            <span>

                                {item.nombre}

                            </span>

                        </div>

                        <span

                            className="infra-status"

                            style={{

                                background:item.color

                            }}

                        >

                            {item.estado}

                        </span>

                    </div>

                ))

            }

        </div>

    );

}