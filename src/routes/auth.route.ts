import { Router } from "express";
import passport from "passport";
import { loginUserController, signUpUserController, verifyUserController } from "../controllers/auth.controller";

const router = Router();

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get("/google/callback", passport.authenticate("google", { session: false }), (req, res) => {
    const data = req.user as any;
    res.json({ user: data.user, token: data.token });

})

router.post("/login", loginUserController);
router.post("/signup", signUpUserController);
router.get("/verify-email", verifyUserController)

export default router;