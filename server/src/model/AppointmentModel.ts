import mongoose, { Schema} from "mongoose";
import { IAppointmentModel } from "../utils/constants/interface";



export const AppointmentSchema = new Schema({
  doctor: { type: String, require: true },
  hospitalName: { type: String, require: true },
  hospitalAddress: { type: String, require: false },
  purposeOfVisit: { type: String, require: true },
  dateOfAppointment: { type: String, require: true }
});


export default mongoose.model<IAppointmentModel>('Appointment', AppointmentSchema);