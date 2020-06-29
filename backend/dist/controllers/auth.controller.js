"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../models/User"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.signup = async (req, res) => {
    const user = new User_1.default({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    console.log(user);
    user.password = await user.encryptPassword(user.password);
    const userSaved = await user.save();
    const token = jsonwebtoken_1.default.sign({ _id: userSaved._id }, process.env.TOKEN_SECRET || "Tokenimage");
    res.header('auth-token', token).json(userSaved);
};
exports.login = async (req, res) => {
    const user = await User_1.default.findOne({ email: req.body.email });
    if (!user)
        return res.status(400).json('Error de email o contraseña');
    const correctPassword = await user.validatePassword(req.body.password);
    if (!correctPassword)
        return res.status(400).json('Email o contraseña erroneos');
    const token = jsonwebtoken_1.default.sign({ _id: user._id }, process.env.TOKEN_SECRET || "Tokenimage", {
        expiresIn: 60 * 60 * 24
    });
    res.header('auth-token', token).json(user);
};
exports.profile = async (req, res) => {
    const user = await User_1.default.findById(req.userId, { password: 0 });
    if (!user)
        return res.status(404).json('Usuario no encontrado');
    res.json(user);
};
