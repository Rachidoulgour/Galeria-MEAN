"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
const index_1 = __importDefault(require("./routes/index"));
//Settings
app.set('port', process.env.PORT || 3500);
//Middlewares
app.use(morgan_1.default('dev'));
app.use(cors_1.default());
app.use(express_1.default.json());
//Routes
app.use('/api', index_1.default);
//strore public files
//app.use('/uploads/imagenes', express.static(path.resolve('uploads')));
app.use('/uploads', express_1.default.static('uploads'));
exports.default = app;
