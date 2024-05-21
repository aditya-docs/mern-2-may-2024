const express = require("express");
const {
  getBlogs,
  getBlogById,
  createBlog,
  deleteBlogById,
  updateBlogById,
  searchBlogs,
} = require("../controllers/blogs.controllers");
const verifyAuth = require("../middlewares/verifyAuth");
const verifyBodyType = require("../middlewares/verifyBodyType");

const router = express.Router();

router.get("/", getBlogs);
router.get("/search", searchBlogs);
router.get("/:id", getBlogById);

router.use(verifyAuth);
router.delete("/:id", deleteBlogById);

router.use(verifyBodyType);
router.post("/", createBlog);
router.patch("/:id", updateBlogById);

module.exports = router;
