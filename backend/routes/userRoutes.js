const express = require("express");
const {
  loginController,
  signupController,
} = require("../controllers/userController");
const Router = express.Router();

Router.post("/login", loginController);
Router.post("/signup", signupController);

module.exports = Router;
