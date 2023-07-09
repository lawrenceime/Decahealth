"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDoctors = exports.getDoctor = exports.getDoctors = void 0;
const DoctorModel_1 = __importDefault(require("../model/DoctorModel"));
const zod_1 = require("zod");
const doctorsValidate_1 = require("../utils/validation/doctorsValidate");
const mongoose_1 = require("mongoose");
const service_1 = require("../utils/services/service");
const getDoctors = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allDoctors = yield DoctorModel_1.default.find();
        return res.status(200).json({
            allDoctors,
        });
    }
    catch (err) {
        return res.status(500).json({
            Error: "Internal Server Error"
        });
    }
});
exports.getDoctors = getDoctors;
const getDoctor = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const doctor = yield DoctorModel_1.default.findOne({ _id: id });
        console.log(id);
        if (!doctor) {
            return res.status(400).json({
                error: 'Doctor not found',
            });
        }
        return res.status(200).json({
            doctor,
        });
    }
    catch (err) {
        return res.status(500).json({
            Error: "Internal Server Error"
        });
    }
});
exports.getDoctor = getDoctor;
const createDoctors = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        let { firstName, lastName, email, password, qualification, image, specialization, phoneNumber, hospital, address } = req.body;
        image = (_a = req.file) === null || _a === void 0 ? void 0 : _a.path;
        const validateDoctor = doctorsValidate_1.registerSchema.safeParse({ firstName, lastName, email, password, specialization, qualification, phoneNumber, hospital, address });
        if (!validateDoctor) {
            res.status(400).json({
                status: "error",
                method: req.method,
                message: "invalid input details"
            });
            return;
        }
        console.log("image    ", image);
        const existing = yield DoctorModel_1.default.findOne({ email });
        if (existing) {
            return res.status(400).json({
                message: "doctor already exist"
            });
        }
        const hashedPassword = (0, service_1.hashPassword)(password);
        console.log('hello');
        console.log(hashedPassword);
        console.log("second value    ", image);
        const doctor = {
            firstName,
            lastName,
            email,
            password: hashedPassword,
            image: (_b = req.file) === null || _b === void 0 ? void 0 : _b.path,
            specialization,
            qualification,
            phoneNumber,
            hospital,
            address
        };
        const createdDoctor = yield DoctorModel_1.default.create(doctor);
        return res.status(200).json({
            doctor: createdDoctor,
        });
    }
    catch (err) {
        if (err instanceof zod_1.ZodError) {
            return res.status(400).json({
                error: err.errors,
            });
        }
        if (err instanceof mongoose_1.Error) {
            return res.status(400).json({
                error: err.message
            });
        }
        return res.status(500).json({
            error: 'Internal Server Error',
        });
    }
});
exports.createDoctors = createDoctors;
