import { Router } from "express";
import { createUser } from "../controller/UserController";


const router = Router()

router.post('/signup', createUser);





export default router;