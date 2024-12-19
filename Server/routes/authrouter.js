import { Router } from "express";
import {login,google,logout,register} from '../controller/usersController.js'


const router = Router();

// auth login
router.post('/login', login);

router.post('/register', register);

router.get('/logout', logout);

router.get('/google', google);

export default router;