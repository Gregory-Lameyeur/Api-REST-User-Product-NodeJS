"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productModel_1 = __importDefault(require("../../models/productModel"));
const createProduct = async (req, res) => {
    try {
        const { name, price, quantity, description } = req.body;
        const product = await productModel_1.default.findOne({ name });
        if (product === null || product === void 0 ? void 0 : product.name) {
            return res
                .status(409)
                .json({ type: 'ERROR', message: 'PRODUCT_ALREADY_EXIST' });
        }
        const newProduct = await productModel_1.default.create({
            name,
            price,
            quantity,
            description,
        });
        res.status(201).json({
            type: 'SUCCES',
            message: 'PRODUCT_CREATED',
            response: { product: newProduct },
        });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};
exports.default = createProduct;
//# sourceMappingURL=createProduct.js.map