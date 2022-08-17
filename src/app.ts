import express from 'express';
import cors from 'cors';
import { routes } from './routes';
import { db_mysql } from './config/my-sql.config';

const app = express();

db_mysql.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('The db is initialize 🎇');
  }
});

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(routes);

export { app };