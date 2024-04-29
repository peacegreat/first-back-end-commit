const express = require("express");
const router = express.Router();
const authRoute = require('./auth/auth.routes')
const baseRoute = require('./base/base.routes')

router.use("/base", baseRoute);
router.use("/auth", authRoute);
module.exports = router;
