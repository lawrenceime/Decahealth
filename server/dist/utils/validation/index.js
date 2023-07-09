"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateAppointment = exports.validateLogin = exports.ValidateUser = void 0;
const zod_1 = __importDefault(require("zod"));
exports.ValidateUser = zod_1.default.object({
    firstname: zod_1.default.string({
        required_error: "Firstname is required"
    }).nonempty({
        message: "Firstname is required"
    }),
    lastname: zod_1.default.string({
        required_error: "Lastname is required"
    }).nonempty({
        message: "Lastname is required"
    }),
    email: zod_1.default.string({
        required_error: "Email is required"
    }).email({
        message: "The email supplied is not valid"
    }).nonempty({
        message: "Email is required"
    }),
    password: zod_1.default.string({
        required_error: "Password is required"
    }).nonempty({
        message: "Password is required"
    }),
    gender: zod_1.default.string({
        required_error: "Gender is required"
    }).nonempty({
        message: "Gender is required"
    }),
    age: zod_1.default.number({
        required_error: "Age is required"
    })
});
exports.validateLogin = zod_1.default.object({
    email: zod_1.default.string({
        required_error: "Email is required"
    }).email({
        message: "The email supplied is not valid"
    }).nonempty({
        message: "Email is required"
    }),
    password: zod_1.default.string({
        required_error: "Password is required"
    }).nonempty({
        message: "Password is required"
    }),
});
exports.ValidateAppointment = zod_1.default.object({
    doctor: zod_1.default.string({
        required_error: "doctor is required"
    }).nonempty({
        message: "doctor is required"
    }),
    hospitalName: zod_1.default.string({
        required_error: "hospitalName is required"
    }).nonempty({
        message: "hospitalName is required"
    }),
    hospitalAddress: zod_1.default.string({
        required_error: "hospitalAddress is required"
    }).nonempty({
        message: "hospitalAddress is required"
    }),
    purposeOfVisit: zod_1.default.string({
        required_error: "purposeOfVisit is required"
    }).nonempty({
        message: "purposeOfVisit is required"
    }),
    dateOfAppointment: zod_1.default.string({
        required_error: "dateOfAppointment is required"
    }).nonempty({
        message: "dateOfAppointment is required"
    })
});
