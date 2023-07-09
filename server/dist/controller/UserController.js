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
exports.loginUser = exports.createUser = void 0;
const uuid_1 = require("uuid");
const UserModel_1 = __importDefault(require("../model/UserModel"));
const validation_1 = require("../utils/validation");
const service_1 = require("../utils/services/service");
const emailNotification_1 = require("../utils/services/emailNotification");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
// creating a new user on the database
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstname, lastname, email, password, gender, age } = req.body;
        const validateInput = validation_1.UserSchema.safeParse({
            firstname,
            lastname,
            email,
            password,
            gender,
            age,
            role: "user",
            active: false
        });
        if (!validateInput) {
            res.status(400).send({
                status: "error",
                method: req.method,
                message: "invalid input details"
            });
            return;
        }
        const hashedPassword = (0, service_1.hashPassword)(password);
        const OTP = (0, service_1.generateOTP)();
        const userData = {
            id: (0, uuid_1.v4)(),
            firstname,
            lastname,
            email,
            password: hashedPassword,
            gender,
            age,
            otp: OTP
        };
        const newUser = yield UserModel_1.default.create({
            firstname,
            lastname,
            email,
            password: hashedPassword,
            gender,
            age,
            otp: OTP,
            role: "user",
            active: false
        }).then(() => {
            return res.status(200).json({
                status: "success",
                method: req.method,
                message: `new user ${userData.email} registration successful`,
                data: userData
            });
        }).catch((err) => {
            return res.status(400).json({
                status: "error",
                method: req.method,
                message: console.log(`${err}`)
            });
        });
        if (!newUser) {
            return [false, 'Unable to sign you up'];
        }
        try {
            yield (0, emailNotification_1.sendMail)({
                to: email,
                OTP: OTP
            });
            return [true, newUser];
        }
        catch (error) {
            return [false, 'Unable to sign up, Please try again later', error];
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.createUser = createUser;
// create login
const loginUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const validate = validation_1.loginUserSchema.safeParse({ email, password });
        if (!validate) {
            return res.status(500).send({
                message: "invalid input"
            });
        }
        const loginData = yield UserModel_1.default.findOne({ email: email });
        if (!loginData) {
            return res.send({
                message: "email does not exist"
            });
        }
        else {
            const validatePassword = yield bcrypt_1.default.compare(password, loginData.password);
            if (validatePassword) {
                const token = jsonwebtoken_1.default.sign(email, `${process.env.DATA_SECRET}`);
                return res.status(200).json({
                    message: "login successful",
                    data: loginData,
                    token
                });
            }
            else {
                return res.status(500).send({
                    message: "incorrect password"
                });
            }
        }
    }
    catch (err) {
        console.log(err);
    }
});
exports.loginUser = loginUser;
