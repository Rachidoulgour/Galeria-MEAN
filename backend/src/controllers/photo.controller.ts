import {Request, Response} from 'express';

export function hola(req: Request, res: Response): Response 
{ return res.send('holaaaaa')}