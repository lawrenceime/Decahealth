import { Router } from "express";
import { adminUser, createUser } from "../controller/UserController";


const router = Router()

router.post('/signup', createUser);
router.post('/signup/admin', adminUser);




export default router;