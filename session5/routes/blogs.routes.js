const express = require("express");
const { getBlogs, createBlog } = require("../controllers/blogs.controllers");
const verifyAuth = require("../middlewares/verifyAuth");

const router = express.Router();

router.get("/", verifyAuth, getBlogs);
router.post("/", verifyAuth, createBlog);

module.exports = router;
