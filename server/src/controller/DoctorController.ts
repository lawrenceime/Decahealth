import { Request, Response, NextFunction } from 'express';
import Doctor from '../model/DoctorModel';
import { ZodError } from 'zod';
import { registerSchema } from '../utils/validation/doctorsValidate';
import { Error } from 'mongoose';
import { hashPassword } from '../utils/services/service';
import { Status } from '../utils/constants/interface';


export const getDoctors = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const allDoctors = await Doctor.find()

    return res.status(200).json({
      allDoctors,
    })
  } catch (err) {
    return res.status(500).json({
      Error: "Internal Server Error"
    })
  }
}

export const getDoctor = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const doctor = await Doctor.findOne({ _id: id });
    console.log(id);

    if (!doctor) {
      return res.status(400).json({
        error: 'Doctor not found',
      });
    }

    return res.status(200).json({
      doctor,
    })
  } catch (err) {
    return res.status(500).json({
      Error: "Internal Server Error"
    })
  }
}

export const createDoctors = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let{ firstName, lastName, email, password, qualification, image, specialization, phoneNumber, hospital, address } = req.body;
    image = req.file?.path

    const validateDoctor = registerSchema.safeParse({ firstName, lastName, email, password, specialization, qualification, phoneNumber, hospital, address })

    if (!validateDoctor) {
      res.status(400).json({
        status: "error",
        method: req.method,
        message: "invalid input details"
      })
      return;
    }

    console.log("image    ",image)

    const existing = await Doctor.findOne({ email });

    if (existing) {
      return res.status(400).json({
        message: "doctor already exist"
      });
    }
    
    const hashedPassword = hashPassword(password)
    console.log('hello')
    console.log(hashedPassword)

    console.log("second value    ",image)

    const doctor = {
      firstName,
      lastName,
      email,
      password: hashedPassword,
      image: req.file?.path,
      specialization,
      qualification,
      phoneNumber,
      hospital,
      address,
      status: Status.available
    };

    const createdDoctor = await Doctor.create(doctor);

    return res.status(200).json({
      doctor: createdDoctor,
    });

  } catch (err: any) {
    if (err instanceof ZodError) {
      return res.status(400).json({
        error: err.errors,
      });
    }

    if (err instanceof Error) {
      return res.status(400).json({
        error: err.message
      });
    }

    return res.status(500).json({
      error: 'Internal Server Error',
    });
  }
};