"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createProduct_1 = __importDefault(require("./createProduct"));
const updateProduct_1 = __importDefault(require("./updateProduct"));
const removeProduct_1 = __importDefault(require("./removeProduct"));
const getProduct_1 = __importDefault(require("./getProduct"));
const getAllProducts_1 = __importDefault(require("./getAllProducts"));
const ProductController = {
    createProduct: createProduct_1.default,
    updateProduct: updateProduct_1.default,
    removeProduct: removeProduct_1.default,
    getProduct: getProduct_1.default,
    getAllProducts: getAllProducts_1.default,
};
exports.default = ProductController;
//# sourceMappingURL=index.js.map