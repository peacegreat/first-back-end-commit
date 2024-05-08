const Joi = require('joi')

const registerSchema = Joi.object({
    fullName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required()
})

module.exports = registerSchema;