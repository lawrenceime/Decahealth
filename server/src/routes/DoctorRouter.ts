import { Router } from "express";
import { createDoctors, getDoctors, getDoctor } from "../controller/DoctorController";
import { upload } from "../middlewares/upload";

const router = Router()


router.post('/createdoctor', upload.single('image'), createDoctors)
router.get('/get-doctors', getDoctors)
router.get('/get-doctors/:id', getDoctor)


export default router