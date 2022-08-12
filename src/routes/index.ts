import { Router } from 'express';
import { compareFaces } from '../controllers/compareFaces';
import { home } from '../controllers/home';

const routes = Router();

routes.get('/', home);
routes.get('/compareFaces', compareFaces);

export { routes };