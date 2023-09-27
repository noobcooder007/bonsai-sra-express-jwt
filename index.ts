import bodyParser from 'body-parser';
import express from 'express';
import dotenv from 'dotenv';
import { auth } from './routes/auth';

dotenv.config();

require('./database/config').dbConnection();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT: string | number = process.env.PORT || 3000;

app.use('/api/v1/login', auth);

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
});