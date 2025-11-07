import "dotenv/config";
import express from "express";
import http from "http";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { initSocket } from "./lib/socket.js";

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  })
);
app.use(cookieParser());
app.use(express.json({ limit: "10mb" }));

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// simple healthcheck
app.get("/api/health", (_req, res) => res.status(200).json({ ok: true }));

// error handler to avoid hard resets
// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});

const server = http.createServer(app);
initSocket(server);

const PORT = process.env.PORT || 5001;
server.listen(PORT, () => console.log(`Server http://localhost:${PORT}`));
