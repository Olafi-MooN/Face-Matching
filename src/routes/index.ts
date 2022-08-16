import { Router } from 'express';
import { compareFaces } from '../controllers/compareFaces';
import { home } from '../controllers/home';
import { uploadImageToS3 } from '../controllers/uploadImageToS3';

const routes = Router();

routes.get('/', home);
routes.get('/compareFaces', compareFaces);
routes.get('/uploadImageToS3', uploadImageToS3);

export { routes };
