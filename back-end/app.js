const express = require("express");
const app = express();
const dotenv = require("dotenv");
const databaseConnection = require("./config/databaseConnection");

dotenv.config({ path: "./config/config.env" });
const PORT = process.env.PORT;


// add json body parser
app.use(express.json());



const server = app.listen(PORT , () => {console.log('server is running')})


// handeling unhandled promise rection

process.on("unhandledRejection", (err) => {
    console.log(`Error : ${err.message}`);
    console.log("shutting down the server due to handle promise rejection");
    server.close(() => {
      process.exit(1);
    });
  });