"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProductController_1 = __importDefault(require("../controllers/ProductController"));
const productRouter = (0, express_1.Router)();
productRouter.post('/create', ProductController_1.default.createProduct);
productRouter.patch('/updateProduct/:productId', ProductController_1.default.updateProduct);
productRouter.delete('/deleteProduct/:productId', ProductController_1.default.removeProduct);
productRouter.get('/getProduct/:productId', ProductController_1.default.getProduct);
productRouter.get('/getAllProducts', ProductController_1.default.getAllProducts);
exports.default = productRouter;
//# sourceMappingURL=productRouter.js.map