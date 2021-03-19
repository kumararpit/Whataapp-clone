const express = require("express");
const multer = require("multer");
const path = require("path");

const router = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "upload/");
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});
const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    function checkfile(file, cb) {
      const filetypes = /jpg|jpeg|png/;
      const extention = filetypes.test(path.extname(file.originalname));
      const mimetype = filetypes.test(file.mimetype);
      if (mimetype && extention) return cb(null, true);
      else cb("Image only");
    }
  },
});
