"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPassword = exports.generateOTP = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const constant_1 = require("../constants/constant");
const otp_generator_1 = __importDefault(require("otp-generator"));
const constant_2 = require("../constants/constant");
// generate OTP
const generateOTP = () => {
    const OTP = otp_generator_1.default.generate(constant_2.OTP_LENGTH, constant_2.OTP_CONFIG);
    return OTP;
};
exports.generateOTP = generateOTP;
// hash password
const hashPassword = (myPlaintextPassword) => {
    const salt = bcrypt_1.default.genSaltSync(constant_1.saltRounds);
    const hash = bcrypt_1.default.hashSync(myPlaintextPassword, salt);
    return hash;
};
exports.hashPassword = hashPassword;
