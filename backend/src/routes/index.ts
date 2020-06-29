import {Router} from 'express';
const router = Router();
import {validateToken} from '../libraries/validateToken'
import {createPhoto, getPhotos, getPhoto, deletePhoto, updatePhoto} from '../controllers/photo.controller';
import { signup, login, profile } from '../controllers/auth.controller';
import upload from '../libraries/multer';


 router.route('/photos')
     .get(getPhotos)
     .post(upload.single('image'), createPhoto)

    

router.route('/photos/:id')
    .get(getPhoto)
    .delete(deletePhoto)
    .put(updatePhoto)

router.post('/signup', signup)
router.post('/login', login)
router.get('/profile', validateToken, profile)
export default router;