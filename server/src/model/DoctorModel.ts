import mongoose, { Schema } from "mongoose";
import { DoctorsModel, Status } from "../utils/constants/interface";
import { AppointmentSchema } from "./AppointmentModel";


export const doctorSchema: Schema = new Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"]
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"]
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true
  },
  password:{
    type: String,
    required: [true, "Password is required"]
  },
  qualification: {
    type: String,
    required: [true, "Qualification is required"]
  },
  specialization: {
    type: String,
    required: [true, "Specialization is required"]
  },
  hospital: {
    type: String,
    required: [true, "Hospital is required"]
  },
  address: {
    type: String,
    required: [true, "Address is required"]
  },
  phoneNumber: {
    type: String,
    required: [true, "PhoneNumber is required"]
  },
  status: {
    type: String, enum: Object.values(Status),
    required: [false]
  },
  appointmentInfo: {
    type: [AppointmentSchema], require: false
  }
  
});

export default mongoose.model<DoctorsModel>('Doctor', doctorSchema);
