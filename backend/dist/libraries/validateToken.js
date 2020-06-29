"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.validateToken = async (req, res, next) => {
    const token = await req.header('auth-token');
    if (!token)
        return res.status(401).json('Acceso denegado');
    const payload = await jsonwebtoken_1.default.verify(token, process.env.TOKEN_SECRET || "Tokenimage");
    req.userId = payload._id;
    next();
};
