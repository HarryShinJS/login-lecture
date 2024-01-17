"use strict";

const express = require("express");
const router = express.Router();

// module
const ctrl = require("./home.ctrl");

// root ctrl 분리 -> .routes/home/home.ctrl.js
router.get("/", ctrl.hello);
// login ctrl 분리 -> 상동
router.get("/login", ctrl.login);

module.exports = router;
