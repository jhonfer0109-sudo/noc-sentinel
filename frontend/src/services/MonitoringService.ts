import type { MonitoringDevice } from "../types/Monitoring";

export class MonitoringService {

    static async getDevices(): Promise<MonitoringDevice[]> {

        await new Promise(resolve => setTimeout(resolve, 500));

        return [

            {
                id: 1,
                nombre: "Windows Server 01",
                tipo: "Servidor",
                sistema: "Windows Server 2022",
                estado: "ONLINE",
                cpu: 34,
                memoria: 62,
                disco: 71,
                temperatura: 42,
                latencia: 8,
                ip: "192.168.1.10",
                uptime: "18 días",
                actualizado: "Hace 5 segundos"
            },

            {
                id: 2,
                nombre: "SQL Server 02",
                tipo: "Base de Datos",
                sistema: "Microsoft SQL Server",
                estado: "WARNING",
                cpu: 87,
                memoria: 79,
                disco: 91,
                temperatura: 61,
                latencia: 17,
                ip: "192.168.1.15",
                uptime: "42 días",
                actualizado: "Hace 5 segundos"
            },

            {
                id: 3,
                nombre: "Firewall Principal",
                tipo: "Firewall",
                sistema: "Fortinet 200F",
                estado: "ONLINE",
                cpu: 19,
                memoria: 38,
                disco: 42,
                temperatura: 39,
                latencia: 3,
                ip: "192.168.1.1",
                uptime: "120 días",
                actualizado: "Hace 5 segundos"
            },

            {
                id: 4,
                nombre: "Linux Web 01",
                tipo: "Servidor Web",
                sistema: "Ubuntu Server 24.04",
                estado: "ONLINE",
                cpu: 41,
                memoria: 55,
                disco: 63,
                temperatura: 44,
                latencia: 10,
                ip: "192.168.1.25",
                uptime: "65 días",
                actualizado: "Hace 5 segundos"
            },

            {
                id: 5,
                nombre: "VMware ESXi",
                tipo: "Virtualización",
                sistema: "VMware ESXi 8",
                estado: "ONLINE",
                cpu: 52,
                memoria: 68,
                disco: 58,
                temperatura: 40,
                latencia: 5,
                ip: "192.168.1.30",
                uptime: "210 días",
                actualizado: "Hace 5 segundos"
            },

            {
                id: 6,
                nombre: "Router Core Cisco",
                tipo: "Router",
                sistema: "Cisco IOS XE",
                estado: "ONLINE",
                cpu: 27,
                memoria: 49,
                disco: 21,
                temperatura: 36,
                latencia: 2,
                ip: "192.168.1.254",
                uptime: "365 días",
                actualizado: "Hace 5 segundos"
            }

        ];

    }

}