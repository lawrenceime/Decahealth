import mongoose, { Schema, Document } from "mongoose";
import { IUserModel } from "../utils/constants/interface";
import { AppointmentSchema } from "./AppointmentModel";




const UserSchema: Schema = new Schema({
    firstname: {
        type: String, require: true
    },
    lastname: {
        type: String, require: true
    },
    email: {
        type: String, require: true,
        unique: true
    },
    password: {
        type: String, require: true
    },
    gender: {
        type: String, require: true
    },
    age: {
        type: Number, require: true
    },
    appointmentInfo: {
        type: [AppointmentSchema], require: false},
    role: {
        type: String, require: false
    },
    lastActive: {
        type: String, require: false
    },
    active: {
        type: Boolean, require: false
    },
    otp: {
        type: String, require: false
    }
})



export default mongoose.model<IUserModel & Document>('User', UserSchema);

