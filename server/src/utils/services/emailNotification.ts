import nodemailer from "nodemailer";
import { MAIL_SETTINGS, MAIL_PARAMS } from "../constants/constant";

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
