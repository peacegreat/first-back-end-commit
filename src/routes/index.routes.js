const express = require("express");
const router = express.Router();

router.use("/base", require("./base route/base.routes"));
module.exports = router;
