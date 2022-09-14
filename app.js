import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import clientsRouter from './lib/routers/clientsRouter.js';
import authRouter from './lib/routers/authRouter.js';
import errorHandler from './lib/middlewares/errorHandler.js';

dotenv.config();

const SERVER_PORT = process.env.SERVER_PORT;

const app = express();
app.use(cors());
app.use(express.json());

app.use('/clients', clientsRouter);
app.use('/auth', authRouter);

app.use(errorHandler);

app.listen(SERVER_PORT, () => console.log(`Server running at port  ${SERVER_PORT}`));