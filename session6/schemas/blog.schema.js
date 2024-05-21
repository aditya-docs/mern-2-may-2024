const mongoose = require("mongoose");
const validator = require("validator");

const authorSchema = new mongoose.Schema(
  {
    fullName: { type: String, maxlength: 25 },
    twitterHandle: { type: String },
    email: {
      type: String,
      required: true,
      maxlength: 50,
      validate: (value) => validator.isEmail(value),
    },
    image: { type: String, validate: (value) => validator.isURL(value) },
  },
  { _id: false }
);

const blogSchema = mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    author: [authorSchema],
    content: { type: String, default: "" },
    publishedAt: { type: Date, default: null },
  },
  { timestamps: true }
);

module.exports = blogSchema;
