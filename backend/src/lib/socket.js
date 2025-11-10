import express from "express";
import http from "http";
import { Server } from "socket.io";

export const app = express();
export const server = http.createServer(app);

let io;
const userSocketMap = new Map();

export const getReceiverSocketId = (userId) => userSocketMap.get(String(userId));

export const initSocket = () => {
  io = new Server(server, {
    cors: {
      origin: process.env.CLIENT_URL || "http://localhost:5173",
      credentials: true,
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"]
    },
    transports: ["websocket", "polling"]
  });

  io.on("connection", (socket) => {
    console.log("Socket connected:", socket.id);
    
    const userId = socket.handshake?.auth?.userId;
    if (!userId) {
      console.log("No userId, disconnecting socket:", socket.id);
      socket.disconnect(true);
      return;
    }

    userSocketMap.set(String(userId), socket.id);
    io.emit("onlineUsers", Array.from(userSocketMap.keys()));

    socket.on("disconnect", () => {
      console.log("Socket disconnected:", socket.id);
      userSocketMap.delete(String(userId));
      io.emit("onlineUsers", Array.from(userSocketMap.keys()));
    });
  });

  return io;
};

export { io };
