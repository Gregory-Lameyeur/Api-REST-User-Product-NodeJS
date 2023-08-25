"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productModel_1 = __importDefault(require("../../models/productModel"));
const getProduct = async (req, res) => {
    try {
        const productId = req.params.productId;
        const product = await productModel_1.default.findById(productId);
        if (!product) {
            return res
                .status(404)
                .json({ type: 'ERROR', message: 'PRODUCT_NOT_FOUND' });
        }
        res.status(200).json(product);
    }
    catch (error) {
        res.status(500).json({ type: 'ERROR', message: error.message });
    }
};
exports.default = getProduct;
//# sourceMappingURL=getProduct.js.map