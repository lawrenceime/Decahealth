"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DoctorController_1 = require("../controller/DoctorController");
const router = (0, express_1.Router)();
router.post('/createDoctor', DoctorController_1.createDoctors);
router.get('/get-doctors', DoctorController_1.getDoctors);
router.get('/get-doctor/:id', DoctorController_1.getDoctor);
exports.default = router;
