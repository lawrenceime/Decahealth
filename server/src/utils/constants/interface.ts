import { Document } from "mongoose";
export interface IAppointmentModel {
    doctor: string;
    hospitalName: string;
    hospitalAddress: string;
    purposeOfVisit: string;
    dateOfAppointment: string;
}
export interface IUserModel {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    gender: string;
    age: number;
    appointmentInfo: [IAppointmentModel];
    role: string;
    active: boolean;
    lastActive: string;
    otp: string;
}

