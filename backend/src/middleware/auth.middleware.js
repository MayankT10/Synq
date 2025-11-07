import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const protectRoute = async (req, res, next) => {
  try {
    const bearer = req.headers.authorization || "";
    const token =
      req.cookies?.jwt ||
      req.cookies?.token ||
      (bearer.startsWith("Bearer ") ? bearer.slice(7) : "");

    if (!token) return res.status(401).json({ error: "Unauthorized" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");
    if (!user) return res.status(401).json({ error: "Unauthorized" });

    req.user = user;
    next();
  } catch (e) {
    console.error("protectRoute error:", e);
    return res.status(401).json({ error: "Unauthorized" });
  }
};
