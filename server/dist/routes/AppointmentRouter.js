"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AppointmentController_1 = require("../controller/AppointmentController");
const router = (0, express_1.Router)();
router.post('/appointment', AppointmentController_1.createAppointment);
exports.default = router;
