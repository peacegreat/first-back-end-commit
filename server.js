const http = require("http");
const app = require("./App");
const PORT = 8080;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Nanbyen's First server is running on port ${PORT}`);
});
