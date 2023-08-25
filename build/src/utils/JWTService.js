"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;
const JWTService = {
    generate: (obj) => {
        const payload = {
            userId: obj.userId,
        };
        const token = jsonwebtoken_1.default.sign(payload, JWT_SECRET, { expiresIn: '1y' });
        return token;
    },
};
exports.default = JWTService;
//# sourceMappingURL=JWTService.js.map