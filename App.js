const express = require("express");
const app = express();
const router = require("./src/routes/index.routes");
app.use("/api", router);
module.exports = app;