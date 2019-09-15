import {Router} from 'express';
const router = Router();

import {hola} from '../controllers/photo.controller'
router.route('/')
    .get(hola);

export default router;