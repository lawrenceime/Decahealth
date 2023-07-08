"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserSchema = exports.UserSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.UserSchema = zod_1.default.object({
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
    }),
    appointmentInfo: zod_1.default.string({
        required_error: "Appointment details is required"
    })
});
exports.loginUserSchema = zod_1.default.object({
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
