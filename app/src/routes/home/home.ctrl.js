"use strict";

const hello = (req, res) => {
    res.render("home/index");
};

const login = (req, res) => {
    res.render("home/login");
};

// {key, value}
module.exports = {
    hello,
    login,
};
