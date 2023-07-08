import mongoose, { Schema } from "mongoose";

export interface DoctorsModel {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  qualification: string;
  specialization: string;
  role: string;
}

export const doctorSchema: Schema = new Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true
  },
  password:{
    type: String,
    required: [true, "Password is required"],
  },
  qualification: {
    type: String,
    required: [true, "Qualification is required"],
  },
  specialization: {
    type: String,
    required: [true, "Specialization is required"],
  },
  hospital: {
    type: String,
    required: [true, "Hospital is required"],
  },
  address: {
    type: String,
    required: [true, "Address is required"],
  },
  phoneNumber: {
    type: String,
    required: [true, "PhoneNumber is required"],
  },
  role: {
    type: String,
    required: [false],
  }
});

export default mongoose.model<DoctorsModel>('Doctor', doctorSchema);
