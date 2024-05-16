const mongoose = require("mongoose");
const blogSchema = require("../schemas/blog.schema");

const blogModel = mongoose.model("blog", blogSchema);

module.exports = blogModel;
