import { io } from "socket.io-client";

let socket = null;

export const connectToSocket = () => {
  if (socket?.connected) return socket;
  socket = io("http://localhost:5001", {
    withCredentials: true,
  });
  return socket;
};

export const getSocket = () => socket;

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};

export const onOnlineUsers = (cb) => {
  const handler = (ids) => cb(Array.isArray(ids) ? ids : []);
  socket.on("getOnlineUsers", handler);
  return () => socket.off("getOnlineUsers", handler);
};