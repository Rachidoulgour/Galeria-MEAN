import {Router} from 'express';
const router = Router();

import {createPhoto, getPhotos, getPhoto, deletePhoto, updatePhoto} from '../controllers/photo.controller';
import upload from '../libraries/multer';
router.route('/photos')
    .get(getPhotos)
    .post(upload.single('image'), createPhoto)
    

router.route('/photos/:id')
    .get(getPhoto)
    .delete(deletePhoto)
    .put(updatePhoto)

export default router;