"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.doctorSchema = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const interface_1 = require("../utils/constants/interface");
const AppointmentModel_1 = require("./AppointmentModel");
exports.doctorSchema = new mongoose_1.Schema({
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
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    image: {
        type: mongoose_1.Schema.Types.Mixed
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
        type: String, enum: Object.values(interface_1.Status),
        required: [false]
    },
    appointmentInfo: {
        type: [AppointmentModel_1.AppointmentSchema], require: false
    }
});
exports.default = mongoose_1.default.model('Doctor', exports.doctorSchema);
