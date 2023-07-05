import dotenv from "dotenv";

dotenv.config()

// salt Rounds for hashing password
export const saltRounds = 10;

// OTP generator properties
export const OTP_LENGTH = 4;
export const OTP_CONFIG = { upperCaseAlphabets: true, specialChars: false };

// email setting
export const MAIL_SETTINGS = {
    service: 'gmail',
    auth: {
        user: process.env.MAIL_EMAIL,
        pass: process.env.MAIL_PASSWORD
    }
}

//mail params typings
export type MAIL_PARAMS = {
    to: string,
    OTP: string
}