import { Router } from "express";
import { getUsers, postUsers } from "../controller/usersController.js";

const router = Router();  // Note the () here

router.get("/creatUser", getUsers);
router.post("/addUser", postUsers );

export default router;