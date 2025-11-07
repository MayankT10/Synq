import { io } from "socket.io-client";

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || "http://localhost:5001";

export const socket = io(SOCKET_URL, {
  autoConnect: false,
  withCredentials: true,
  transports: ["websocket"],
});

export const onOnlineUsers = (cb) => {
  const handler = (ids) => cb(Array.isArray(ids) ? ids : []);
  socket.on("onlineUsers", handler);
  return () => socket.off("onlineUsers", handler);
};