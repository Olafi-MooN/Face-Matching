import express from 'express';
import 'dotenv/config';

import { app } from './app';
const server = express();

server.use(app);

const port = process.env.PORT || 3002;

server.listen(port, () => {
  console.log('Server Started 💻 in port ' + port);
});