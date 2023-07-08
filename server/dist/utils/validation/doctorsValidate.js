"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.registerSchema = zod_1.default.object({
    firstName: zod_1.default.string({
        required_error: "FirstName is Required"
    }),
    lastName: zod_1.default.string({
        required_error: "lastName is Required"
    }),
    email: zod_1.default.string({
        required_error: "email is Required"
    }),
    password: zod_1.default.string({
        required_error: "password is Required"
    }),
    qualification: zod_1.default.string({
        required_error: "qualification is Required"
    }),
    specialization: zod_1.default.string({
        required_error: "specialization is Required"
    }),
    hospital: zod_1.default.string({
        required_error: "hospital is Required"
    }),
    address: zod_1.default.string({
        required_error: "address is Required"
    }),
    phoneNumber: zod_1.default.number({
        required_error: "phoneNumber is Required"
    })
});
