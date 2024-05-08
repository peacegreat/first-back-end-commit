const {hash, hashSync, genSalt} = require('bcrypt')
const registerSchema = require('../../validators/registerValidation')
const user = require('../../models/user.model')
const httpRegisterUser = async (req, res)=>{
    try {
        // Validate the request body 
        const {error} = registerSchema.validate(req.body)
        const {password, ...rest}= req.body
        if (error) {
            return res.status(400).json({
                status: false,
                message: error.message,
                data: null
            })
        }

        //hash the password
        const salt = await genSalt(10)
        console.log(salt)
        const hashedPassword = await hashSync(password, salt)
        //create the user
        const data = new user({
            password:hashedPassword,
            ...rest
        })

        await data.save()
        delete data.password

        return res.status(201).json({
            status: true,
            message: `user with id ${data._id} created successfully`,
            data,
        })
    } catch (error) {
        return res.status(400).json({
            status: false,
            data: null,
            message: error.message
        })
    }
}
const httpLoginUser = async (req, res)=>{
    try {
        //validate req.body
        //compare password
        //respond appropriately

    } catch (error) {
        return res.status(400).json({
            status: false,
            data: null,
            message: error.message
        }) 
    }
}

module.exports={
    httpLoginUser,
    httpRegisterUser
}