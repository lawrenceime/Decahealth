
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
    otp: string;
}

export interface DoctorsModel {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    image: string | Buffer;
    qualification: string;
    specialization: string;
    status: Status;
    appointmentInfo: [IAppointmentModel]
}

export enum Status {
    available = 'available',
    unavailable = 'unavailable'
}