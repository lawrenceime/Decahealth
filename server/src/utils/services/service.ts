import bcrypt from "bcrypt";
import { saltRounds } from "../constants/constant";
import otpGenerator from "otp-generator";
import { OTP_LENGTH, OTP_CONFIG } from "../constants/constant";


// generate OTP
export const generateOTP = () => {
    const OTP = otpGenerator.generate(OTP_LENGTH, OTP_CONFIG);
    return OTP;
}

// hash password
export const hashPassword = (myPlaintextPassword: string) => {
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(myPlaintextPassword, salt);
  
  return hash;
}