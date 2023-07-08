import { Router } from "express";
import { createAppointment } from "../controller/AppointmentController";


const router = Router();


router.post('/appointment', createAppointment);



export default router;