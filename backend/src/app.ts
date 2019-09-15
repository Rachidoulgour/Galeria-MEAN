import express from 'express';
import morgan from 'morgan';
import path from 'path';

const app = express();

import indexRoutes from './routes/index';

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api', indexRoutes);

//strore public files
app.use('./public', express.static(path.resolve('public')));

export default app;