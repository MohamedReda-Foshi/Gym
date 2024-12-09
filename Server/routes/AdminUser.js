import { Router } from 'express';

import{getAdmUsers,postAdmUser} from '../controller/admuserController.js';




const router = Router();


// get admin user

router.get("/adminuser",getAdmUsers);

// post admin user
router.post("/addadminuser",postAdmUser);

  

  
  export default router;