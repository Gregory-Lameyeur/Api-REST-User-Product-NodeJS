"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
const mongoose_1 = __importDefault(require("mongoose"));
require('dotenv').config();
const optionsConnection = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
const makeNewConnection = (uri) => {
    const db = mongoose_1.default.createConnection(uri, optionsConnection);
    db.on('error', function (error) {
        console.log(`MongoDB :: connection ${this.name} ${JSON.stringify(error)}`);
        db.close().catch(() => console.log(`MongoDB :: failed to close connection ${this.name}`));
    });
    db.on('connected', function () {
        mongoose_1.default.set('debug', function (col, method, query, doc) {
            console.log(`MongoDB :: ${this.conn.name} ${col}.${method}(${JSON.stringify(query)},${JSON.stringify(doc)})`);
        });
        console.log(`MongoDB :: connected ${this.name}`);
    });
    db.on('disconnected', function () {
        console.log(`MongoDB :: disconnected ${this.name}`);
    });
    return db;
};
const mongo = makeNewConnection(process.env.MONGO_URI);
const connectionDB = {
    mongo,
};
exports.default = connectionDB;
//# sourceMappingURL=connectionDB.js.map