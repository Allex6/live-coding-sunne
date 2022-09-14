import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import getToken from './../utils/getToken.js';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

export default function tokenValidator(req, res, next){

    try {

        const token = getToken(req.headers);
        const payload = jwt.verify(token, JWT_SECRET);
        res.locals.payload = payload;
        next();

    } catch (err) {
        console.log(err);
        res.status(401).send('Invalid token');
    }

};