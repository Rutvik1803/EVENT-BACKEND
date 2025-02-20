import { Router } from "express";
import { getLocality, getLocalityById } from "../controllers/locality.controller";

const router = Router();

router.get("/locality", getLocality);
router.get("/locality/:id", getLocalityById);

export default router;