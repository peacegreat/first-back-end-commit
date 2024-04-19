const express = require("express");
const route = express.Router();
const {
  httpGetAPPAbout,
  httpGetAPPBase,
  httpGetAppLogin,
} = require("../../controllers/Base/base.controllers");
const { aboutmidddleware } = require("../../middleware/aboutMiddleware");
route.get("/", httpGetAPPBase);
route.post("/about", aboutmidddleware, httpGetAPPAbout);
route.get("/login", httpGetAppLogin)

module.exports = route;
