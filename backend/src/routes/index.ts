import {Router} from 'express';
const router = Router();

import {createPhoto, getPhotos} from '../controllers/photo.controller';
import multer from '../libraries/multer';
router.route('/photos')
    .post(multer.single('image'), createPhoto)
    .get(getPhotos)

export default router;