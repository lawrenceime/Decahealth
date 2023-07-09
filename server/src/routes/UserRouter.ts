import { Router } from "express";
import { createUser, loginUser } from "../controller/UserController";
import { auth } from "../middlewares/auth";

const router = Router()

router.post('/signup', createUser);
router.post('/login', auth, loginUser);





export default router;