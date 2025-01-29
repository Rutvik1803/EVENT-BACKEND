import { Router } from "express";
import passport from "passport";

const router = Router();

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get("/google/callback", passport.authenticate("google", { session: false }), (req, res) => {
    const data = req.user as any;
    res.json({ user: data.user, token: data.token });

})

export default router;