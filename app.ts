const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = 5000; // default port to listen
import router from "./routers/todos.router";

app.get("/api", function (req, res) {
  res.send("Hello world!");
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// CORS MIDDLEWARE
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
// parse application/json
app.use(bodyParser.json());
app.use("/api", router);
app.use(express.json());

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
