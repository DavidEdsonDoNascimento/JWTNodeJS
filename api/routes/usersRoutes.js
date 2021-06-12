import { Router } from 'express';
import UsersController from '../controllers/usersController';

const router = Router();

router.post('/sign', UsersController.sign);

router.get('/login', UsersController.login);

export default router;