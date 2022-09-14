import { Router } from "express";
import * as authController from './../controllers/authController.js';
import loginValidatorSchema from './../middlewares/loginValidatorSchema.js';

const router = Router();

router.post('/login', 
    loginValidatorSchema,
    authController.login
);

export default router;