"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAppointment = void 0;
const AppointmentModel_1 = __importDefault(require("../model/AppointmentModel"));
const validation_1 = require("../utils/validation");
const emailNotification_1 = require("../utils/services/emailNotification");
const UserModel_1 = __importDefault(require("../model/UserModel"));
const DoctorModel_1 = __importDefault(require("../model/DoctorModel"));
const interface_1 = require("../utils/constants/interface");
const createAppointment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { doctor, doctorEmail, email, hospitalName, hospitalAddress, purposeOfVisit, dateOfAppointment } = req.body;
    const user = yield UserModel_1.default.findOne({ email: email });
    if (!user) {
        res.status(400).send({
            status: "error",
            method: req.method,
            message: "invalid user"
        });
        return;
    }
    const doctorInfo = yield DoctorModel_1.default.findOne({ email: doctorEmail });
    if (!doctorInfo) {
        res.status(400).send({
            status: "error",
            method: req.method,
            message: "invalid doctor details"
        });
        return;
    }
    const validateInput = validation_1.ValidateAppointment.safeParse({
        doctor,
        hospitalName,
        hospitalAddress,
        purposeOfVisit,
        dateOfAppointment
    });
    if (!validateInput) {
        res.status(400).send({
            status: "error",
            method: req.method,
            message: "invalid input details"
        });
        return;
    }
    const appointmentData = {
        doctor,
        hospitalName,
        hospitalAddress,
        purposeOfVisit,
        dateOfAppointment
    };
    user.appointmentInfo.push(appointmentData);
    yield user.save();
    if (doctorInfo.appointmentInfo.length <= 5) {
        doctorInfo.appointmentInfo.push(appointmentData);
        yield doctorInfo.save();
        doctorInfo.status = interface_1.Status.available;
    }
    else {
        doctorInfo.status = interface_1.Status.unavailable;
    }
    const userAppointment = yield AppointmentModel_1.default.create(appointmentData).then(() => {
        return res.status(200).json({
            status: "success",
            method: req.method,
            message: `appointment created successful`
        });
    }).catch((err) => {
        return res.status(400).json({
            status: "error",
            method: req.method,
            message: console.log(`${err}`)
        });
    });
    if (!userAppointment) {
        return [false, 'Unable to create appointment'];
    }
    try {
        yield (0, emailNotification_1.sendAppointment)({
            to: email,
            cc: doctorEmail,
            Appointment: appointmentData
        });
        return [true, userAppointment];
    }
    catch (error) {
        return [false, 'Unable to  create appointment, Please try again later', error];
    }
});
exports.createAppointment = createAppointment;
