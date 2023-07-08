import { Request, Response, NextFunction } from "express";
import User from "../model/UserModel";
import { ValidateUser } from "../utils/validation";
import { hashPassword, generateOTP } from "../utils/services/service";
import { sendMail } from "../utils/services/emailNotification";


// creating a new user on the database
export const createUser = async (req: Request, res: Response, next: NextFunction) => {

    try {

        const { 
            firstname,
            lastname,
            email,
            password,
            gender,
            age
         } = req.body;

        const validateInput = ValidateUser.safeParse({ 
            firstname,
            lastname,
            email,
            password,
            gender,
            age,
            role: "user",
            active: false
         })

        if (!validateInput) {
            res.status(400).send({
                status: "error",
                method: req.method,
                message: "invalid input details"
            })
            return;
        }

        const hashedPassword = hashPassword(password);
        const OTP = generateOTP()

        const userData = {
            firstname,
            lastname,
            email,
            password: hashedPassword,
            gender,
            age,
            otp: OTP
        }

        const newUser = await User.create({
            firstname,
            lastname,
            email,
            password: hashedPassword,
            gender,
            age,
            otp: OTP,
            role: "user",
            active: false
        }).then(() => {
            return res.status(200).json({
                status: "success",
                method: req.method,
                message: `new user ${userData.email} registration successful`,
                data: userData
            })
        }).catch((err) => {
            return res.status(400).json({
                status: "error",
                method: req.method,
                message: console.log(`${err}`)
            });
        })

        if (!newUser) {
            return [false, 'Unable to sign you up'];
        }
        try {
            await sendMail({
                to: email,
                OTP: OTP
            });

            return [true, newUser];

        } catch (error) {

            return [false, 'Unable to sign up, Please try again later', error];

        }

    } catch (error) {
        console.log(error)
    }
}



export const adminUser = async (req: Request, res: Response, next: NextFunction) => {

    try {

        const { 
            firstname,
            lastname,
            email,
            password,
            gender,
            age
         } = req.body;

        const validateInput = ValidateUser.safeParse({ 
            firstname,
            lastname,
            email,
            password,
            gender,
            age
         })

        if (!validateInput) {
            res.status(400).send({
                status: "error",
                method: req.method,
                message: "invalid input details"
            })
            return;
        }

        const hashedPassword = hashPassword(password);
        const OTP = generateOTP()

        const adminData = {
            firstname,
            lastname,
            email,
            password: hashedPassword,
            gender,
            age,
            otp: OTP,
            role: "admin",
            active: true
        }

        const admin = await User.create({
            firstname,
            lastname,
            email,
            password: hashedPassword,
            gender,
            age,
            otp: OTP,
            role: "admin",
            active: true
        }).then(() => {
            return res.status(200).json({
                status: "success",
                method: req.method,
                message: `new user ${adminData.email} registration successful`,
                data: adminData
            })
        }).catch((err) => {
            return res.status(400).json({
                status: "error",
                method: req.method,
                message: console.log(`${err}`)
            });
        })

        if (!admin) {
            return [false, 'Unable to sign you up'];
        }
        try {
            await sendMail({
                to: email,
                OTP: OTP
            });

            return [true, admin];

        } catch (error) {

            return [false, 'Unable to sign up, Please try again later', error];

        }

    } catch (error) {
        console.log(error)
    }
}



