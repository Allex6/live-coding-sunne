import { Router } from "express";
import * as emailsController from './../controllers/emailsController.js';

const router = Router();

router.post('/send-emails', emailsController.sendEmails);

export default router;