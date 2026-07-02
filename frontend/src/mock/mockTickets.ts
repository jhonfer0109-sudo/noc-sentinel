export const mockTickets = [

    {
        id: 1,
        numero: "INC-1001",
        titulo: "Servidor de correo fuera de línea",
        cliente: "Banco Nacional",
        prioridad: "Crítica",
        estado: "En Progreso",
        sla: 95,

        tecnico: "Carlos Gómez",

        fecha: "30/06/2026",

        descripcion:
            "El servidor Microsoft Exchange dejó de responder desde las 08:34 AM. Los usuarios no pueden enviar ni recibir correos electrónicos."

    },

    {
        id: 2,
        numero: "INC-1002",
        titulo: "VPN intermitente",
        cliente: "Seguros Andina",
        prioridad: "Alta",
        estado: "Asignado",
        sla: 88,

        tecnico: "Laura Pérez",

        fecha: "30/06/2026",

        descripcion:
            "Los usuarios remotos presentan desconexiones frecuentes al utilizar la VPN corporativa."

    },

    {
        id: 3,
        numero: "INC-1003",
        titulo: "Actualización Windows",
        cliente: "Grupo Éxito",
        prioridad: "Media",
        estado: "Nuevo",
        sla: 100,

        tecnico: "Sin asignar",

        fecha: "30/06/2026",

        descripcion:
            "Se requiere desplegar la actualización de seguridad de Windows en los equipos del área administrativa."

    }

];