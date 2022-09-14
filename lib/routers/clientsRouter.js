import { Router } from "express";
import * as clientsController from './../controllers/clientsController.js';
import tokenValidator from './../middlewares/tokenValidator.js';

const router = Router();

router.get('/list',
    /*tokenValidator,*/
    clientsController.getClients
);

export default router;