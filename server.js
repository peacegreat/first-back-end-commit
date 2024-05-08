require('dotenv').config()
const http = require("http");
const app = require("./App");
const { connectToDB } = require("./src/utils/databaseConnection");
const PORT = process.env.PORT ?? 8080
const server = http.createServer(app);

const startServer = async () => {
  await connectToDB();
  server.listen(PORT, () => {
    console.log(`Jethro  server is running on port ${PORT}`);
  });
};
startServer();
