import { Router } from 'express';
import { compareFaces } from '../controllers/compareFaces';
import { home } from '../controllers/home';
import { uploadImageToS3 } from '../controllers/uploadImageToS3';
import { getAllUsers, insertUser } from '../controllers/users';

const routes = Router();

routes.get('/', home);

// AWS
routes.get('/compareFaces', compareFaces);
routes.get('/uploadImageToS3', uploadImageToS3);

// Users
routes.get('/users', getAllUsers);
routes.post('/users', insertUser);

export { routes };
