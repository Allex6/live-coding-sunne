import joi from 'joi';

const authSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().length(10).required()
});

export default authSchema;