const Blog = require("../models/blog.model");

class BlogService {
  findAll = async () => Blog.find();

  findById = async (id) => Blog.findById(id);

  create = async (body) => Blog.create(body);

  deleteById = async (id) => Blog.findOneAndDelete({ _id: id });

  updateById = async (id, body) =>
    Blog.findOneAndUpdate({ _id: id }, body, { new: true });

  findByQuery = async (title, author) =>
    Blog.find({
      $or: [
        { title: { $regex: new RegExp(title, "i") } },
        { author: { $elemMatch: { email: author } } },
      ],
    });
}

module.exports = BlogService;
