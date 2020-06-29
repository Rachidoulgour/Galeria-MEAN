import { Request, Response, NextFunction } from "express";

import jwt from 'jsonwebtoken'

interface IPayload {
    _id: string;
    iat: number;
    exp: number;
}

export const validateToken = async (req: Request, res:Response, next: NextFunction)=>{
 const token = await req.header('auth-token');
 if(!token) return res.status(401).json('Acceso denegado');
 const payload = await jwt.verify(token, process.env.TOKEN_SECRET || "Tokenimage") as IPayload;
 req.userId = payload._id;
 next();

}