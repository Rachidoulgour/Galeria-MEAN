"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
async function startConnection() {
    await mongoose_1.default.connect('mongodb://localhost/photo-galeria-db', {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });
    console.log('database is connected');
}
exports.startConnection = startConnection;
