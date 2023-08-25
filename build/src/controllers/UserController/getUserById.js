"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userModel_1 = __importDefault(require("../../models/userModel"));
const getUserById = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await userModel_1.default.findById(userId);
        if (!user) {
            return res
                .status(404)
                .json({ type: 'ERROR', message: 'Utilisateur non trouvé' });
        }
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json({ type: 'ERROR', message: error.message });
    }
};
exports.default = getUserById;
//# sourceMappingURL=getUserById.js.map