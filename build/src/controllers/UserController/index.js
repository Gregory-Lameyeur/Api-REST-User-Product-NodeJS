"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const register_1 = __importDefault(require("./register"));
const login_1 = __importDefault(require("./login"));
const getUserById_1 = __importDefault(require("./getUserById"));
const UserController = {
    register: register_1.default,
    login: login_1.default,
    getUserById: getUserById_1.default,
};
exports.default = UserController;
//# sourceMappingURL=index.js.map