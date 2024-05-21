const mongoose = require("mongoose");

const authorSchema = mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number },
});

const blogSchema = mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    author: { type: [authorSchema] },
    content: { type: String, default: "" },
    publishedAt: { type: Date, default: null },
  },
  { timestamps: true }
);

module.exports = blogSchema;
