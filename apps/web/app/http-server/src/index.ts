import express from "express";

const app = express();
const PORT = 3001;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("🚀 HTTP Server running");
});

app.post("/create-room", (req, res) => {
  const roomId = Math.random().toString(36).substring(2, 8);
  res.json({ roomId });
});

app.listen(PORT, () => {
  console.log(`HTTP server running on http://localhost:${PORT}`);
});
