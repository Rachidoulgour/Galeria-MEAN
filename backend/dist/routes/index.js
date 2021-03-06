"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const validateToken_1 = require("../libraries/validateToken");
const photo_controller_1 = require("../controllers/photo.controller");
const auth_controller_1 = require("../controllers/auth.controller");
const multer_1 = __importDefault(require("../libraries/multer"));
router.route('/photos')
    .get(photo_controller_1.getPhotos)
    .post(multer_1.default.single('image'), photo_controller_1.createPhoto);
router.route('/photos/:id')
    .get(photo_controller_1.getPhoto)
    .delete(photo_controller_1.deletePhoto)
    .put(photo_controller_1.updatePhoto);
router.post('/signup', auth_controller_1.signup);
router.post('/login', auth_controller_1.login);
router.get('/profile', validateToken_1.validateToken, auth_controller_1.profile);
exports.default = router;
