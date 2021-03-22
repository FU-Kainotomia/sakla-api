const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const authRouter = require("./routes/auth");
const homeRouter = require("./routes/home");
const apikeyMiddleware = require("./middlewares/apikey");
const authMiddleware = require("./middlewares/auth");

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use("/uploads", express.static("uploads"));

app.use(apikeyMiddleware);

app.use("/auth", authRouter);
app.use(authMiddleware);
app.use("/home", homeRouter);

module.exports = app;
