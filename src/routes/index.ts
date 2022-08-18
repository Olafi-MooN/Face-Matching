import { Router } from 'express';
import { compareFaces } from '../controllers/recognitionController/compareFaces';
import { getListImageBucketS3 } from '../controllers/recognitionController/getListImageBucketS3';
import { uploadImageToS3 } from '../controllers/recognitionController/uploadImageToS3';
import { getAllUsers, insertUser } from '../controllers/usersController/users';

const routes = Router();

routes.get('/', getListImageBucketS3);

// AWS
routes.get('/compareFaces', compareFaces);
routes.get('/uploadImageToS3', uploadImageToS3);

// Users
routes.get('/users', getAllUsers);
routes.post('/users', insertUser);

export { routes };
