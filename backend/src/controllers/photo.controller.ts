import {Request, Response} from 'express';

import Photo from '../models/Photos';

export function getPhotos(req: Request, res: Response){

}

export async function createPhoto(req: Request, res: Response){
    const { title, description } = req.body;
    
    const newPhoto = {
        title: title,
        description: description,
        imagePath: req.file.path
    };
    const photo = new Photo(newPhoto);
    await photo.save();

    return res.json({
        message: 'Photo successfully saved',
        photo
    })
}