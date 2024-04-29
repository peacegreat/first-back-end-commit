const express = require("express");
const route = express.Router();
const {
  httpGetAPPAbout,
  httpGetAPPBase,
  httpGetAppLogin,
} = require("../../controllers/Base/base.controllers");
const { aboutmidddleware } = require("../../middleware/aboutMiddleware");
route
.get("/", httpGetAPPBase)
.post("/about", aboutmidddleware, httpGetAPPAbout)

module.exports = route;
