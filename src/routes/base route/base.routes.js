const express = require("express");
const route = express.Router();
const {
  httpGetAPPAbout,
  httpGetAPPBase,
} = require("../../controllers/Base/base.controllers");
route.get("/", httpGetAPPBase);
route.get("/about", httpGetAPPAbout);

module.exports = route;
