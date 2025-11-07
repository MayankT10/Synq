import { Server } from "socket.io";

let io;
const userSocketMap = new Map(); // userId -> socketId

export const getReceiverSocketId = (userId) => userSocketMap.get(String(userId));

export const initSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: process.env.CLIENT_URL || "http://localhost:5173",
      credentials: true,
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    },
    pingTimeout: 60000,
  });

  io.on("connection", (socket) => {
    const userId = socket.handshake?.auth?.userId || socket.handshake?.query?.userId;
    if (!userId) {
      socket.disconnect(true);
      return;
    }

    userSocketMap.set(String(userId), socket.id);
    io.emit("onlineUsers", Array.from(userSocketMap.keys()));

    socket.on("disconnect", () => {
      userSocketMap.delete(String(userId));
      io.emit("onlineUsers", Array.from(userSocketMap.keys()));
    });
  });

  return io;
};

export { io };