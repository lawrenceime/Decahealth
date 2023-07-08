import { Router } from "express";
import { createDoctors, getDoctors, getDoctor } from "../controller/DoctorController";

const router = Router()


router.post('/createDoctor', createDoctors)
router.get('/get-doctors', getDoctors)
router.get('/get-doctor/:id', getDoctor)


export default router