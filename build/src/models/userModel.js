"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const connectionDB_1 = __importDefault(require("../utils/connectionDB"));
const UserSchema = new mongoose_1.Schema({
    phone: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    password: { type: String, required: true },
    address: { type: String, required: true },
    orders: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Order' },
    birthDate: { type: String, required: true },
});
const User = connectionDB_1.default.mongo.model('user', UserSchema, 'user');
exports.default = User;
//# sourceMappingURL=userModel.js.map