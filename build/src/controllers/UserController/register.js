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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs = __importStar(require("bcryptjs"));
const JWTService_1 = __importDefault(require("../../utils/JWTService"));
const userModel_1 = __importDefault(require("../../models/userModel"));
const register = async (req, res) => {
    try {
        const { firstname, lastname, email, address, phone, birthDate, password } = req.body;
        const user = await userModel_1.default.findOne({ email });
        if (user === null || user === void 0 ? void 0 : user._id)
            return res
                .status(409)
                .json({ type: 'ERROR', message: 'USER_ALREADY_EXIST' });
        const salt = await bcryptjs.genSalt();
        const passwordHash = await bcryptjs.hash(password, salt);
        const newUser = await userModel_1.default.create({
            firstname,
            lastname,
            email,
            address,
            phone,
            birthDate,
            password: passwordHash,
        });
        const token = JWTService_1.default.generate({ userId: newUser._id });
        res.cookie('authToken', token, {
            expires: new Date(Number(new Date()) + 315360000000),
            httpOnly: true,
        });
        res.status(201).json({
            type: 'SUCCESS',
            message: 'USER_CREATED',
            response: {
                user: newUser,
            },
        });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};
exports.default = register;
//# sourceMappingURL=register.js.map