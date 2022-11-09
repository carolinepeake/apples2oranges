require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const router = require("./routes/routes.js");
const spotifyRouter = require("./routes/spotifyRouter.js");

const app = express();
app.use(cors());

app.use(express.static(path.join(__dirname, "./public")));

// increases data limit for pictures
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: false,
  })
);
app.use(
  bodyParser.json({
    limit: "50mb",
  })
);

app.use(express.json());

app.use("/", router);
app.use("/spotify", spotifyRouter);

const port = process.env.EXPRESS_PORT;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;
