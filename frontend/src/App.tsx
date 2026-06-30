function App() {
  return (
    <div
      style={{
        background: "#07131F",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontFamily: "Segoe UI",
      }}
    >
      <div
        style={{
          width: 420,
          background: "#102132",
          padding: 40,
          borderRadius: 18,
          boxShadow: "0 15px 45px rgba(0,0,0,.45)",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            marginBottom: 8,
            color: "#34d399",
          }}
        >
          🛡 NOC Sentinel
        </h1>

        <p
          style={{
            color: "#9CA3AF",
            marginBottom: 35,
          }}
        >
          Centro Inteligente de Operaciones
        </p>

        <button
          style={{
            width: "100%",
            padding: 16,
            border: 0,
            borderRadius: 10,
            background: "#2563EB",
            color: "white",
            fontSize: 17,
            cursor: "pointer",
          }}
        >
          Iniciar con Microsoft
        </button>

        <p
          style={{
            marginTop: 35,
            color: "#6B7280",
            fontSize: 13,
          }}
        >
          Versión 0.2.0
        </p>
      </div>
    </div>
  );
}

export default App;