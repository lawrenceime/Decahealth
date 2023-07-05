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
exports.auth = void 0;
const UserModel_1 = __importDefault(require("../model/UserModel"));
const auth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, otp } = req.body;
    const user = yield UserModel_1.default.findOne({
        email
    });
    if (!user) {
        res.status(400).send({
            status: "error",
            method: req.method,
            message: `${email} not found`
        });
        return;
    }
    if (user && user.otp !== otp) {
        res.status(400).send({
            status: "error",
            method: req.method,
            message: `Invalid OTP`
        });
        return;
    }
    const activeUser = yield UserModel_1.default.findByIdAndUpdate(user.id, { $set: { active: true } });
    return [true, activeUser];
});
exports.auth = auth;
