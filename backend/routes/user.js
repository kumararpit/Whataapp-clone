const mongoose = require("mongoose");
const express = require("express");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const joi = require("joi");
const { User } = require("../models/User");
const router = express.Router();
router.post("/", async (req, res) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("email is already registered");
  user = new User(
    _.pick(req.body, [
      "name",
      "email",
      "password",
      "DOB",
      "about",
      "gender",
      "profilepic",
    ])
  );
  const Salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, Salt);
  user = await user.save();
  res.send(_.pick(user, ["name", "email"]));
});

const schema = joi.object({
  name: joi.string().min(2).max(50).required(),
  email: joi.string().required().email(),
  password: joi.string().min(6).max(1024).required().lowercase().uppercase(1),
  DOB: joi.date().required(),
  about: joi.string(),
  profilepic: joi.string(),
  gender: joi.string(),
});
module.exports = router;
