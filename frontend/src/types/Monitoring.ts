export interface MonitoringDevice {

    id: number;

    nombre: string;

    tipo: string;

    estado: "ONLINE" | "WARNING" | "OFFLINE";

    cpu: number;

    memoria: number;

    disco: number;

    temperatura: number;

    latencia: number;

    ip: string;

    sistema: string;

    uptime: string;

    actualizado: string;

}