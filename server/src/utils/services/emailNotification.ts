import nodemailer from "nodemailer";
import { MAIL_SETTINGS, MAIL_PARAMS, APPOINTMENT_PARAMS } from "../constants/constant";

const transporter = nodemailer.createTransport(MAIL_SETTINGS);

export const sendMail = async (params: MAIL_PARAMS) => {
    try {
        let info = await transporter.sendMail({
            from: MAIL_SETTINGS.auth.user,
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
        
    } catch (error) {
        console.log(error);
    }
};



export const sendAppointment = async (params: APPOINTMENT_PARAMS) => {
    try {
        let info = await transporter.sendMail({
            from: MAIL_SETTINGS.auth.user,
            to: params.to,
            cc: params.cc,
            subject: "Hello ✔",
            html: `
      <div
        class="container"
        style="max-width: 90%; margin: auto; padding-top: 20px"
      >
        <h2>Welcome to DECAHEALTH.</h2>
        <h4>You are officially booked your appointment✔</h4>
        <p style="margin-bottom: 30px;">Please, your appointment details below</p>
        <h3 style="font-size: 20px; letter-spacing: 2px; text-align:center;">${params.Appointment.doctor}</h3><br>
        <h3 style="font-size: 20px; letter-spacing: 2px; text-align:center;">${params.Appointment.hospitalName}</h3><br>
        <h3 style="font-size: 20px; letter-spacing: 2px; text-align:center;">${params.Appointment.hospitalAddress}</h3><br>
        <h3 style="font-size: 20px; letter-spacing: 2px; text-align:center;">${params.Appointment.purposeOfVisit}</h3><br>
        <h3 style="font-size: 20px; letter-spacing: 2px; text-align:center;">${params.Appointment.dateOfAppointment}</h3><br>
   </div>
    `,
        });

        return info;
        
    } catch (error) {
        console.log(error);
    }
};