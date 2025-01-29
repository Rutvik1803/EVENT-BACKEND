import express from "express";
import { authenticateJWT, authorizeRoles } from "../middlewares/auth.middleware";

const router = express.Router();

router.get("/admin/dashboard", authenticateJWT, authorizeRoles(["admin"]), (req, res) => {
    res.json({ message: "Welcome Admin" });
});

router.get("/organizer/events", authenticateJWT, authorizeRoles(["organizer", "admin"]), (req, res) => {
    res.json({ message: "Organizer Events" });
});

export default router;
