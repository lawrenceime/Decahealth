import { Request, Response, NextFunction } from "express";
import { v4 as uuidv4 } from "uuid";
import User from "../model/UserModel";
import { UserSchema, loginUserSchema } from "../utils/validation";
import { hashPassword, generateOTP } from "../utils/services/service";
import { sendMail } from "../utils/services/emailNotification";
import jwt from "jsonwebtoken";
import  bcrypt  from "bcrypt";

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

        const validateInput = UserSchema.safeParse({ 
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
            id: uuidv4(),
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


// create login

 export const loginUser = async (req: Request, res: Response, next: NextFunction ) => {
            try {
                const {
                    email,
                    password 
                } = req.body

        const validate = loginUserSchema.safeParse({ email, password})

                if (!validate) {
                    return res.status(500).send({
                        message: "invalid input"
                    })
                }
            const loginData =  await User.findOne({email: email})

             if(!loginData) {
                return res.send ({

                    message: "email does not exist" 
                })
            }else { 
                     const validatePassword = await bcrypt.compare (password, loginData.password);
                    if(validatePassword) {
                    const token = jwt.sign( email, `${process.env.DATA_SECRET}`)
                    return res.status(200).json ({
                      message: "login successful",
                        data: loginData,
                        token
                        })
                    }else{
                        return res.status(500).send({
                            message: "incorrect password"
                        })
                    }   
                    }
                }
            catch(err) {
                console.log(err)}
     }




            


