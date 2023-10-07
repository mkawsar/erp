import http from 'http';
import mongoose from 'mongoose';
import express, {Request, Response} from 'express';

import config from './config/config';

console.log(config.mongo);


const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    res.json({message: 'Hello, TypeScript Express!'})
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
