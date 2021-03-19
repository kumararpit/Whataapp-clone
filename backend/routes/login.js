const mongoose = require("mongoose");
const express = require("express");
const _ = require("lodash");
const bcrypt = require("bcryptjs");
const joi = require("joi");
const { User } = require("../models/User");
const router = express.Router();

router.post("/", async (req, res) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Invalid email/password");
  const validpassword = await bcrypt.compare(req.body.password, user.password);
  if (!validpassword) return res.status(400).send("Invalid email/password");
  res.send("true");
});
const schema = joi.object({
  email: joi.string().required().email(),
  password: joi.string().min(6).max(1024).required().lowercase().uppercase(1),
});
module.exports = router;
