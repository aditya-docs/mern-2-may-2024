const Blog = require("../models/blog.model");

const findAllBlogs = async () => Blog.find();

const findBlogByIdHelper = async (id) => Blog.findById(id);

const createBlogDocument = async (body) => Blog.create(body);

const deleteBlogDocumentById = async (id) => Blog.findOneAndDelete({ _id: id });

const updateBlogDocumentById = async (id, body) =>
  Blog.findOneAndUpdate({ _id: id }, body, { new: true });

const findBlogsByTitleAndAuthor = async (title, author) =>
  Blog.find({
    $or: [
      { title: { $regex: new RegExp(title, "i") } },
      { author: { $elemMatch: { email: author } } },
    ],
  });

module.exports = {
  findAllBlogs,
  findBlogByIdHelper,
  createBlogDocument,
  deleteBlogDocumentById,
  updateBlogDocumentById,
  findBlogsByTitleAndAuthor,
};
