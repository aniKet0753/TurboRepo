import express from "express";

const app = express();
const PORT = 3001;

app.use(express.json());

app.get("/", (req, res) => {
  res.send(" HTTP Server running");
});

app.post("/create-room", (req, res) => {
  
});

app.listen(PORT, () => {
  console.log(`HTTP server running on http://localhost:${PORT}`);
});
