"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const connectionDB_1 = __importDefault(require("../utils/connectionDB"));
const ProductSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    quantity: { type: Number, default: 0 },
    description: { type: String },
});
const Product = connectionDB_1.default.mongo.model('product', ProductSchema, 'product');
exports.default = Product;
//# sourceMappingURL=productModel.js.map