const mongoose = require("mongoose");
const blogSchema = require("../schemas/blog.schema");

const blogModel = mongoose.model("Blog", blogSchema);

module.exports = blogModel;
