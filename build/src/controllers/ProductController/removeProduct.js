"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productModel_1 = __importDefault(require("../../models/productModel"));
const removeProduct = async (req, res) => {
    try {
        const productId = req.params.productId;
        const product = await productModel_1.default.findByIdAndDelete(productId);
        if (!product) {
            return res
                .status(404)
                .json({ type: 'ERROR', message: 'PRODUCT_NOT_FOUND' });
        }
        return res
            .status(200)
            .json({ type: 'SUCCESS', message: 'PRODUCT_DELETED' });
    }
    catch (err) {
        res.status(500).json({ type: 'ERROR', message: err.message });
    }
};
exports.default = removeProduct;
//# sourceMappingURL=removeProduct.js.map