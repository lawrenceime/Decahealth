"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controller/UserController");
const auth_1 = require("../middlewares/auth");
const router = (0, express_1.Router)();
router.post('/signup', UserController_1.createUser);
router.post('/login', auth_1.auth, UserController_1.loginUser);
exports.default = router;
