import {Request, Response} from 'express';
import User, {IUser} from '../models/User';
import jwt from 'jsonwebtoken';

export const signup = async(req: Request, res: Response) => {
    const user: IUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    console.log(user);
    user.password = await user.encryptPassword(user.password);
    const userSaved = await user.save();
    const token: string = jwt.sign({_id: userSaved._id}, process.env.TOKEN_SECRET || "Tokenimage");
    res.header('auth-token', token).json(userSaved);
};
export const login = async (req: Request, res: Response) => {
    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).json('Error de email o contraseña');
    const correctPassword = await user.validatePassword(req.body.password);
    if(!correctPassword) return res.status(400).json('Email o contraseña erroneos');
    const token: string = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET || "Tokenimage", {
        expiresIn: 60*60*24
    });
    res.header('auth-token', token).json(user);
}
export const profile = async (req: Request, res: Response) => {
    const user = await User.findById(req.userId, {password: 0});
    if(!user) return res.status(404).json('Usuario no encontrado');
    res.json(user)
}