"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productModel_1 = __importDefault(require("../../models/productModel"));
const getAllProducts = async (req, res) => {
    try {
        const products = await productModel_1.default.find();
        res.status(200).json(products);
    }
    catch (err) {
        res.status(500).json({ type: 'ERROR', message: err.message });
    }
};
exports.default = getAllProducts;
//# sourceMappingURL=getAllProducts.js.map