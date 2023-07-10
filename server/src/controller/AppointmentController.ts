import { Request, Response, NextFunction } from "express";
import Appointment from "../model/AppointmentModel";
import { ValidateAppointment } from "../utils/validation";
import { sendAppointment } from "../utils/services/emailNotification";
import User from "../model/UserModel";
import Doctor from "../model/DoctorModel"
import { IAppointmentModel, Status } from "../utils/constants/interface";



export const createAppointment = async (req: Request, res: Response, next: NextFunction) => {
    const {
        doctor,
        doctorEmail,
        userEmail,
        hospitalName,
        hospitalAddress,
        purposeOfVisit,
        dateOfAppointment
    } = req.body;


    const user = await User.findOne({ email: userEmail })

    if (!user) {
        res.status(400).json({
            status: "error",
            method: req.method,
            message: "invalid user"
        })
        return;
    }

    const doctorInfo = await Doctor.findOne({ email: doctorEmail });

    if (!doctorInfo) {
        res.status(400).json({
            status: "error",
            method: req.method,
            message: "invalid doctor details"
        })
        return;
    }


    const validateInput = ValidateAppointment.safeParse({
        doctor,
        hospitalName,
        hospitalAddress,
        purposeOfVisit,
        dateOfAppointment
    });

    if (!validateInput) {
        res.status(400).json({
            status: "error",
            method: req.method,
            message: "invalid input details"
        })
        return;
    }

    const isExistingAppointment = await Appointment.findOne({ email: userEmail })
        if (isExistingAppointment) {
        res.status(400).json({
            status: "error",
            method: req.method,
            message: "created appointment already"
        })
        return;
    }

    const appointmentData: IAppointmentModel = {
        doctor,
        hospitalName,
        hospitalAddress,
        purposeOfVisit,
        dateOfAppointment
    }

    user.appointmentInfo.push(appointmentData);
    await user.save();


    console.log( doctorInfo.appointmentInfo)
     if (Number(doctorInfo.appointmentInfo.length) <= Number(5)) {

    doctorInfo.appointmentInfo.push(appointmentData);
    await doctorInfo.save();
       
        await Doctor.findByIdAndUpdate(doctorInfo.id, { $set: { status: Status.available } })
    } else {
        await Doctor.findByIdAndUpdate(doctorInfo.id, { $set: { status: Status.unavailable } })
    }




    const userAppointment = await Appointment.create(appointmentData).then(() => {
        return res.status(200).json({
            status: "success",
            method: req.method,
            message: `appointment created successful`
        })
    }).catch((err) => {
        return res.status(400).json({
            status: "error",
            method: req.method,
            message: console.log(`${err}`)
        });
    })

    if (!userAppointment) {
        return [false, 'Unable to create appointment'];
    }
    try {
        await sendAppointment({
            to: userEmail,
            cc: doctorEmail,
            Appointment: appointmentData
        });

        return [true, userAppointment];

    } catch (error) {

        return [false, 'Unable to  create appointment, Please try again later', error];

    }
}