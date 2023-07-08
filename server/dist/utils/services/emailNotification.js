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
exports.sendAppointment = exports.sendMail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const constant_1 = require("../constants/constant");
const transporter = nodemailer_1.default.createTransport(constant_1.MAIL_SETTINGS);
const sendMail = (params) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let info = yield transporter.sendMail({
            from: constant_1.MAIL_SETTINGS.auth.user,
            to: params.to,
            subject: "Hello ✔",
            html: `
      <div
        class="container"
        style="max-width: 90%; margin: auto; padding-top: 20px"
      >
        <h2>Welcome to DECAHEALTH.</h2>
        <h4>You are officially In ✔</h4>
        <p style="margin-bottom: 30px;">Pleas enter the sign up OTP to get started</p>
        <h1 style="font-size: 40px; letter-spacing: 2px; text-align:center;">${params.OTP}</h1>
   </div>
    `,
        });
        return info;
    }
    catch (error) {
        console.log(error);
    }
});
exports.sendMail = sendMail;
const sendAppointment = (params) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let info = yield transporter.sendMail({
            from: constant_1.MAIL_SETTINGS.auth.user,
            to: params.to,
            subject: "Hello ✔",
            html: `
      <div
        class="container"
        style="max-width: 90%; margin: auto; padding-top: 20px"
      >
        <h2>Welcome to DECAHEALTH.</h2>
        <h4>You are officially booked your appointment✔</h4>
        <p style="margin-bottom: 30px;">Please, your appointment details below</p>
        <h3 style="font-size: 40px; letter-spacing: 2px; text-align:center;">${params.Appointment.doctor}</h3><br>
        <h3 style="font-size: 40px; letter-spacing: 2px; text-align:center;">${params.Appointment.hospitalName}</h3><br>
        <h3 style="font-size: 40px; letter-spacing: 2px; text-align:center;">${params.Appointment.hospitalAddress}</h3><br>
        <h3 style="font-size: 40px; letter-spacing: 2px; text-align:center;">${params.Appointment.purposeOfVisit}</h3><br>
        <h3 style="font-size: 40px; letter-spacing: 2px; text-align:center;">${params.Appointment.dateOfAppointment}</h3><br>
   </div>
    `,
        });
        return info;
    }
    catch (error) {
        console.log(error);
    }
});
exports.sendAppointment = sendAppointment;
