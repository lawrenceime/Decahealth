"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAIL_SETTINGS = exports.OTP_CONFIG = exports.OTP_LENGTH = exports.saltRounds = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// salt Rounds for hashing password
exports.saltRounds = 10;
// OTP generator properties
exports.OTP_LENGTH = 4;
exports.OTP_CONFIG = { upperCaseAlphabets: true, specialChars: false };
// email setting
exports.MAIL_SETTINGS = {
    service: 'gmail',
    auth: {
        user: process.env.MAIL_EMAIL,
        pass: process.env.MAIL_PASSWORD
    }
};
