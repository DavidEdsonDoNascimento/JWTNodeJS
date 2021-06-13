import { Router } from 'express';
import UsersController from '../controllers/usersController';
import Middlewares from '../middlewares/middlewares';

const router = Router();

router
.post('/sign', UsersController.sign)
.get('/login', UsersController.login)
.get('/users', Middlewares.authentication, UsersController.users);

export default router;