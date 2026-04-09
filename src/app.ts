import express from 'express';
import cors from 'cors'
import compression from 'compression'
import helmet from 'helmet'
import dotenv from 'dotenv'
import usersRouter  from './modules/users/users.routes.js'; 
import climaRoutes from './modules/clima/clima.routes.js';
import { errorMiddleware } from './middlewares/error.middlewares.js';
import v1Routes from './api/v1/index.js';

export  const app = express();

app.use (cors());
app.use (compression());
app.use(express.json());
app.use(helmet());

app.use('/users', usersRouter);
app.use('/api/v1', v1Routes);
app.use(errorMiddleware);
