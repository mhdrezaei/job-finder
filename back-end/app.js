const express = require("express");
const bodyParser = require('body-parser');

const app = express();
const dotenv = require("dotenv");
const cors = require('cors');
const databaseConnection = require("./config/databaseConnection");
const jobs = require("./routes/jobs");
const errorMiddleware = require("./middlewares/errors");

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
 app.use(bodyParser.json());



dotenv.config({ path: "./config/config.env" });
const PORT = process.env.PORT;

databaseConnection();
// add json body parser
app.use(express.json());

// all routes
app.use("/api/v1/", jobs);

app.use(errorMiddleware);



const server = app.listen(PORT , () => {console.log('server is running')})


// handeling unhandled promise rection

process.on("unhandledRejection", (err) => {
    console.log(`Error : ${err.message}`);
    console.log("shutting down the server due to handle promise rejection");
    server.close(() => {
      process.exit(1);
    });
  });