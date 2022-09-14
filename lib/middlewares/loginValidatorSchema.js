import authSchema from "../schemas/authSchema.js";

export default function loginValidatorSchema(req, res, next){

    try {
        
        const bodyData = req.body;
        const { error } = authSchema.validate(bodyData);
        if(error) return res.sendStatus(409);

        next();

    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }

};