"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productModel_1 = __importDefault(require("../../models/productModel"));
const updateProduct = async (req, res) => {
    try {
        const productId = req.params.productId;
        const updateFields = req.body;
        const updatedProduct = await productModel_1.default.findOneAndUpdate({ _id: productId }, updateFields, { new: true, runValidators: true });
        if (!updatedProduct) {
            return res
                .status(404)
                .json({ type: 'ERROR', message: 'PRODUCT_NOT_FOUND' });
        }
        res
            .status(200)
            .json({
            type: 'SUCCES',
            message: 'PRODUCT_UPDATED',
            response: { product: updatedProduct },
        });
    }
    catch (err) {
        res.status(500).json({ type: 'ERROR', message: err.message });
    }
};
exports.default = updateProduct;
//# sourceMappingURL=updateProduct.js.map