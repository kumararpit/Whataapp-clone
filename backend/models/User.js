const mongoose = require("mongoose");
const express = require("express");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    about: {
      type: String,
      default: "hey I am using whatsapp-clone",
      minlength: 1,
      maxlength: 50,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 1024,
    },
    gender: {
      type: String,
    },
    DOB: {
      type: Date,
      required: true,
    },
    profilepic: {
      type: String,
    },
  })
);
exports.User = User;
