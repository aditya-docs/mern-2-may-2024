const BlogService = require("../services/blogs.service");
const BlogServiceInstance = new BlogService();

const getBlogs = async (req, res) => {
  try {
    const blogs = await BlogServiceInstance.findAll();
    res.send(blogs);
  } catch (error) {
    res.status(500).json("Oops! Something went wrong. Please try again");
  }
};

const getBlogById = async (req, res) => {
  try {
    const reqBlog = await BlogServiceInstance.findById(req.params.id);
    if (reqBlog === null)
      return res
        .status(404)
        .json({ message: "Could not find a blog with the given id" });
    res.send(reqBlog);
  } catch (error) {
    if (error.message.includes("Cast to ObjectId failed"))
      return res.status(404).json({ message: "Invalid id" });
    res
      .status(500)
      .json({ message: "Oops! Something went wrong. Please try again" });
  }
};

const createBlog = async (req, res) => {
  try {
    const newBlog = await BlogServiceInstance.create(req.body);
    // const newBlog = new Blog(req.body);
    // await newBlog.save();
    res.status(201).json({ id: newBlog._id });
  } catch (error) {
    if (error.code === 11000)
      return res.status(400).json({
        message:
          "A blog with this title already exists. Please use a unique title",
      });
    res.status(500).json({ message: error.message });
  }
};

const deleteBlogById = async (req, res) => {
  try {
    const reqBlog = await BlogServiceInstance.findById(req.params.id);
    if (reqBlog === null)
      return res
        .status(404)
        .json({ message: "Could not find a blog with the given id" });
    await BlogServiceInstance.deleteById(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    if (error.message.includes("Cast to ObjectId failed"))
      return res.status(404).json({ message: "Invalid id" });
    res
      .status(500)
      .json({ message: "Oops! Something went wrong. Please try again" });
  }
};

const updateBlogById = async (req, res) => {
  try {
    const reqBlog = await BlogServiceInstance.findById(req.params.id);
    if (reqBlog === null)
      return res
        .status(404)
        .json({ message: "Could not find a blog with the given id" });
    const updatedBlog = await BlogServiceInstance.updateById(
      req.params.id,
      req.body
    );
    res.status(200).json(updatedBlog);
  } catch (error) {
    if (error.code === 11000)
      return res.status(400).json({
        message:
          "A blog with this title already exists. Please use a unique title",
      });
    if (error.message.includes("Cast to ObjectId failed"))
      return res.status(404).json({ message: "Invalid id" });
    res
      .status(500)
      .json({ message: "Oops! Something went wrong. Please try again" });
  }
};

const searchBlogs = async (req, res) => {
  const { title, author } = req.query;
  try {
    const blogs = await BlogServiceInstance.findByQuery(title, author);
    res.send(blogs);
  } catch (error) {
    res.status(500).json("Oops! Something went wrong. Please try again");
  }
};

module.exports = {
  getBlogs,
  getBlogById,
  createBlog,
  deleteBlogById,
  updateBlogById,
  searchBlogs,
};
