import express, { Application} from 'express';
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';

const app: Application = express();

import indexRoutes from './routes/index';

//Settings
app.set('port', process.env.PORT || 3500);

//Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

//Routes
app.use('/api', indexRoutes);

//strore public files
//app.use('/uploads/imagenes', express.static(path.resolve('uploads')));
app.use('/uploads', express.static('uploads'));

export default app;