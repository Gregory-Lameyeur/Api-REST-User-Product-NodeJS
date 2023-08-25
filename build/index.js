"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const http_1 = __importDefault(require("http"));
const userRouter_1 = __importDefault(require("./src/routes/userRouter"));
const cors_1 = __importDefault(require("cors"));
const productRouter_1 = __importDefault(require("./src/routes/productRouter"));
const router = express_1.default.Router();
exports.default = router;
const app = (0, express_1.default)();
dotenv_1.default.config({ path: __dirname + '/.env' });
const port = process.env.PORT || 8000;
const options = {
    allowedHeaders: [
        'Origin',
        'X-Requested-With',
        'Content-Type',
        'Accept',
        'X-Access-Token',
    ],
    credentials: true,
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    origin: 'http://localhost:3000',
    preflightContinue: true,
};
app.use((0, cors_1.default)(options));
app.use(express_1.default.json());
app.get('/', (_req, res) => {
    res.send('Hello World');
});
app.use('/user', userRouter_1.default);
app.use('/product', productRouter_1.default);
app.use(express_1.default.static('public'));
app.use(express_1.default.json());
const httpServer = http_1.default.createServer(app);
httpServer.listen(port, () => {
    console.log(`Server connected on port : ${port}`);
});
//# sourceMappingURL=index.js.map