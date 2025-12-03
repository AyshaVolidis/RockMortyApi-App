export const Spinner = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: 20 }}>
      <div
        style={{
          width: 40,
          height: 40,
          border: "4px solid #ddd",
          borderTopColor: "#4CAF50",
          borderRadius: "50%",
          animation: "spin 0.8s linear infinite",
        }}
      />

      <style>
        {`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        `}
      </style>
    </div>
  );
};
