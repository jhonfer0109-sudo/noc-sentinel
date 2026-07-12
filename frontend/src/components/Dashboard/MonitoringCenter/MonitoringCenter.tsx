import "./MonitoringCenter.css";

import { useEffect, useState } from "react";
import { MonitoringService } from "../../../services/MonitoringService";
import type { MonitoringDevice } from "../../../types/Monitoring";

export default function MonitoringCenter() {

    const [devices, setDevices] = useState<MonitoringDevice[]>([]);

    useEffect(() => {

        MonitoringService.getDevices().then(setDevices);

    }, []);

    const getStatusClass = (estado: string) => {

        switch (estado) {

            case "ONLINE":
                return "status online";

            case "WARNING":
                return "status warning";

            default:
                return "status offline";

        }

    };

    return (

        <div className="monitoring">

            <div className="monitoring-title">

                <h2>📡 Monitoring Center</h2>

                <span>6 dispositivos monitoreados</span>

            </div>

            <div className="monitoring-grid">

                {devices.map((device) => (

                    <div
                        className="monitor-card"
                        key={device.id}
                    >

                        <div className="card-header">

                            <div>

                                <h3>{device.nombre}</h3>

                                <small>{device.sistema}</small>

                            </div>

                            <span className={getStatusClass(device.estado)}>

                                {device.estado}

                            </span>

                        </div>

                        <div className="progress-item">

                            <span>CPU</span>

                            <div className="progress">

                                <div
                                    className="progress-fill cpu"
                                    style={{ width: `${device.cpu}%` }}
                                />

                            </div>

                            <strong>{device.cpu}%</strong>

                        </div>

                        <div className="progress-item">

                            <span>RAM</span>

                            <div className="progress">

                                <div
                                    className="progress-fill ram"
                                    style={{ width: `${device.memoria}%` }}
                                />

                            </div>

                            <strong>{device.memoria}%</strong>

                        </div>

                        <div className="progress-item">

                            <span>Disco</span>

                            <div className="progress">

                                <div
                                    className="progress-fill disk"
                                    style={{ width: `${device.disco}%` }}
                                />

                            </div>

                            <strong>{device.disco}%</strong>

                        </div>

                        <div className="extra-info">

                            <div>🌡 {device.temperatura}°C</div>

                            <div>🌐 {device.latencia} ms</div>

                        </div>

                        <div className="extra-info">

                            <div>📍 {device.ip}</div>

                            <div>⏱ {device.uptime}</div>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );

}