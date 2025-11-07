import { Server } from "socket.io";

let io;
const userSocketMap = new Map();

export const getReceiverSocketId = (userId) => userSocketMap.get(String(userId));

export const initSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: process.env.CLIENT_URL || "http://localhost:5173",
      credentials: true
    }
  });

  io.on("connection", (socket) => {
    const userId = socket.handshake?.auth?.userId;
    if (!userId) return socket.disconnect(true);
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