const Blog = require("../models/blog.model");

const getBlogs = async (req, res) => {
  res.send(await Blog.find());
};

const createBlog = async (req, res) => {
  console.log(req.body);
  const newBlog = await Blog.create(req.body);
  res.status(201).send(newBlog);
};

module.exports = { getBlogs, createBlog };
