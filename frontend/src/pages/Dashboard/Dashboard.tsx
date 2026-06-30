import DashboardHeader from "../../components/Dashboard/DashboardHeader/DashboardHeader";
import MetricCard from "../../components/Dashboard/MetricCard/MetricCard";
import Charts from "../../components/Dashboard/Charts/Charts";

export default function Dashboard() {
  return (
    <>
      <DashboardHeader />

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "30px",
          flexWrap: "wrap",
        }}
      >
        <MetricCard
          titulo="Tickets"
          valor="24"
          color="#20c997"
        />

        <MetricCard
          titulo="Alertas"
          valor="6"
          color="#dc3545"
        />

        <MetricCard
          titulo="SLA"
          valor="98%"
          color="#ffc107"
        />

        <MetricCard
          titulo="Clientes"
          valor="15"
          color="#3b82f6"
        />
      </div>

      <Charts />
    </>
  );
}