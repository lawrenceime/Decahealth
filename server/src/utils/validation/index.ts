import z from "zod";


export const UserSchema = z.object({

   firstname: z.string({
        required_error: "Firstname is required"
   }).nonempty({
        message: "Firstname is required"
    }),
    lastname: z.string({
        required_error: "Lastname is required"
    }).nonempty({
        message: "Lastname is required"
    }),
    email: z.string({
        required_error: "Email is required"
    }).email({
        message: "The email supplied is not valid"
    }).nonempty({
        message: "Email is required"
    }),
    password: z.string({
        required_error: "Password is required"
    }).nonempty({
        message: "Password is required"
    }),
    gender: z.string({
        required_error: "Gender is required"
    }).nonempty({
        message: "Gender is required"
    }),
    age: z.number({
        required_error: "Age is required"
    }),
    appointmentInfo: z.string({
         required_error: "Appointment details is required"
    })
});


