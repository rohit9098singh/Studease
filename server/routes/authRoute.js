import express from "express";

import authenticateUser from "../middleware/authMiddleware.js";
import { checkUserAuth, forgotPassword, login, logout, register, resetPassword } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);
router.get("/verify-auth", authenticateUser, checkUserAuth);


export default router