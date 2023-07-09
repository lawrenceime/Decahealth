import z from "zod";


export const ValidateUser = z.object({

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
    })

});

export const validateLogin = z.object({
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
})

export const ValidateAppointment = z.object({

    doctor: z.string({
        required_error: "doctor is required"
    }).nonempty({
        message: "doctor is required"
    }),
    hospitalName: z.string({
        required_error: "hospitalName is required"
    }).nonempty({
        message: "hospitalName is required"
    }),
    hospitalAddress: z.string({
        required_error: "hospitalAddress is required"
    }).nonempty({
        message: "hospitalAddress is required"
    }),
    purposeOfVisit: z.string({
        required_error: "purposeOfVisit is required"
    }).nonempty({
        message: "purposeOfVisit is required"
    }),
    dateOfAppointment: z.string({
        required_error: "dateOfAppointment is required"
    }).nonempty({
        message: "dateOfAppointment is required"
    })
});

