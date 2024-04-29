const { httpRegisterUser, httpLoginUser } = require('../../controllers/auth/auth.controller')

const route = require('express').Router()

route.post('/login', httpLoginUser)
route.post('/register', httpRegisterUser)

module.exports= route