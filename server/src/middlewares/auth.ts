import { Request, NextFunction, Response } from 'express';
import User from "../model/UserModel";


export const auth = async (req: Request, res: Response, next: NextFunction) => {
    const { email, otp } = req.body

    const user = await  User.findOne({
       email
    })

    if (!user) {
         res.status(400).send({
            status: "error",
            method: req.method,
            message: `${email} not found`
           })
        return; 
    }

    if (user && user.otp !== otp) {
        res.status(400).send({
            status: "error",
            method: req.method,
            message: `Invalid OTP`
           })
        return; 
    }
    
    const activeUser = await User.findByIdAndUpdate(user.id, { $set: { active: true } })
    
    return [true, activeUser]
}