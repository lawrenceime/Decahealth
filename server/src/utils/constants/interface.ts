import { Document } from "mongoose";
export interface IUserModel extends Document {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    gender: string;
    age: number;
    appointmentInfo: [];
    role: string;
    active: boolean;
    lastActive: string;
    otp: string;
}


export interface IAppointmentModel extends Document {
    doctor: string;
    hospitalName: string;
    hospitalLocation: string;
    purposeOfVisit: string;
    dateOfAppointment: string;
}