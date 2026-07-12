export interface Ticket{

    id:string;

    titulo:string;

    cliente:string;

    prioridad:"Alta"|"Media"|"Baja";

    estado:"Abierto"|"En Progreso"|"Resuelto";

    sla:number;

    descripcion:string;

}