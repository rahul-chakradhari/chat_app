const express = require("express");
const UserModel = require("../models/userModel");
const expressAsyncHandler = require("express-async-handler");
const generateToken = require("../config/generateToken");

// Fixed Syntax
const loginController = expressAsyncHandler(async (req, res) => {
  const { name, password } = req.body;
  const user = await UserModel.findOne({ name });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    throw new Error("Invalid userName or password");
  }
});

const signupController = expressAsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Check for all fields
  if (!name || !email || !password) {
    res.status(400).json({ message: "Please provide all credentials" });
    return;
  }

  // Pre-existing user
  const userExists = await UserModel.findOne({ email });
  if (userExists) {
    res.status(400).json({ message: "User already exists" });
    return;
  }

  // Username already taken
  const userNameExists = await UserModel.findOne({ name });
  if (userNameExists) {
    res.status(400).json({ message: "Username already exists" });
    return;
  }

  // Create an entry in the db
  const user = await UserModel.create({ name, email, password });

  if (user) {
    res.status(201).json({
      message: "User created successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      },
    });
  } else {
    res.status(500).json({ message: "Failed to create user" });
  }
});

module.exports = { loginController, signupController };
