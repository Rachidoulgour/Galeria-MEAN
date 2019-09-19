import {Router} from 'express';
const router = Router();

import {createPhoto, getPhotos, getPhoto, deletePhoto} from '../controllers/photo.controller';
import multer from '../libraries/multer';
router.route('/photos')
    
    .post(multer.single('image'), createPhoto)
    .get(getPhotos)

router.route('/photos/:id')
    .get(getPhoto)
    .delete(deletePhoto)

export default router;