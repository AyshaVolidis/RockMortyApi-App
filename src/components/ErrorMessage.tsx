export const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <div
      style={{
        margin: "30px auto",
        padding: "15px 20px",
        maxWidth: 400,
        backgroundColor: "#ffeded",
        color: "#b40000",
        borderRadius: 8,
        border: "1px solid #ffb3b3",
        textAlign: "center",
        fontWeight: 500,
      }}
    >
      {message}
    </div>
  );
};
