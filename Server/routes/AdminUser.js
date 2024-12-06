import { Router } from 'express';

import{getAdmUsers,postAdmProduct} from '../controller/userController.js'




const router = Router();


// get admin user

router.get("/adminuser",getAdmUsers);

// post admin user
router.post("/addadminuser",postAdmProduct);

  

  
  export default router;