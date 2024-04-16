const path = require("path");
const httpGetAPPBase = async (req, res) => {
  try {
    return res.status(200).json({ msg: "Welcome to my first api!" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
const httpGetAPPAbout = async (req, res) => {
  try {
    return res.status(200).sendFile("about.html", {
      root: path.join(__dirname.split("controllers")[0] + "/views"),
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
module.exports = {
  httpGetAPPAbout,
  httpGetAPPBase,
};
