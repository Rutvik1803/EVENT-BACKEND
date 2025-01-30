import { Router } from "express";
import { deleteUser, getUserById, getUsers, updateUser } from "../controllers/user.controller";

const router = Router();

router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.patch("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;