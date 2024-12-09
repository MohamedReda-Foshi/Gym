import { Router } from "express";
import {login,google,logout} from '../controller/usersController.js'


const router = Router();

// auth login
router.get('/login', login);


router.get('/logout', logout);


router.get('/google', google);

export default router;