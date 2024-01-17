"use strict";

// module
const express = require("express");
const app = express();

const PORT = 3000;
// routing
const home = require("./routes/home");
// app setting
app.set("views", "./views");
app.set("view engine", "ejs");

// use => middle ware method
app.use("/", home);

module.exports = app;