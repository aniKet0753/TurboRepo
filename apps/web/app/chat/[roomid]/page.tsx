export default function ChatRoom() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0b0f14",
        display: "flex",
        flexDirection: "column",
        color: "#e5e7eb",
        fontFamily: "sans-serif",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "12px 16px",
          borderBottom: "1px solid #1f2937",
          fontWeight: "600",
        }}
      >
        Chat Room
      </div>

      {/* Messages */}
      <div
        style={{
          flex: 1,
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {/* Other user message */}
        <div
          style={{
            maxWidth: "70%",
            backgroundColor: "#1f2937",
            padding: "10px 14px",
            borderRadius: "12px",
            alignSelf: "flex-start",
            fontSize: "14px",
          }}
        >
          Welcome to the chat room
        </div>

        {/* Your message */}
        <div
          style={{
            maxWidth: "70%",
            backgroundColor: "#2563eb",
            padding: "10px 14px",
            borderRadius: "12px",
            alignSelf: "flex-end",
            fontSize: "14px",
          }}
        >
          Hi 👋
        </div>
      </div>

      {/* Input */}
      <div
        style={{
          padding: "12px",
          borderTop: "1px solid #1f2937",
          display: "flex",
          gap: "8px",
        }}
      >
        <input
          placeholder="Type a message..."
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "8px",
            border: "none",
            outline: "none",
            backgroundColor: "#1f2937",
            color: "#e5e7eb",
          }}
        />
        <button
          style={{
            padding: "10px 14px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#2563eb",
            color: "white",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}
