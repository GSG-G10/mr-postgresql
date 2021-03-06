require("env2")("config.env");
const express = require("express");
const { join } = require("path");
const router = require("./controllers/index");

const compression = require('compression');
const app = express();
// const router = require("./router");

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(express.static(join(__dirname, "..", "public")));
app.use(router)
app.set("port", process.env.PORT || 5000);

// app.use(router);

module.exports = app;
