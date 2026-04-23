import express from "express";
import { login, logout, register } from "../controllers/authControllers.js";
import { loginSchema, registerSchema } from "../schema/authSchema.js";
import { inputValidator } from "../middleware/inputValidator.js";

const router = express.Router()

router.post('/register', inputValidator(registerSchema),register)
router.post('/login', inputValidator(loginSchema), login)
router.get('/logout', logout)

export default router