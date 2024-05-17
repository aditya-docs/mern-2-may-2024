const mongoose = require("mongoose");
const { required } = require("./userSearch.schema");

const authorSchema = mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number },
});

const blogSchema = mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    author: { type: [authorSchema], required: true },
    content: { type: String, default: "" },
    publishedAt: { type: Date, default: null },
  },
  { timestamps: true }
);

module.exports = blogSchema;
