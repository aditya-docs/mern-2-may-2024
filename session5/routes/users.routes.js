const express = require("express");
const {
  getUsers,
  getUserByUserId,
  searchUser,
} = require("../controllers/users.controllers");
const verifyAuth = require("../middlewares/verifyAuth");
const validateUserSearch = require("../middlewares/validators/validateUserSearch");

const router = express.Router();

router.get("/", verifyAuth, getUsers);

router.get("/search", verifyAuth, validateUserSearch, searchUser);

router.get("/:uuid", getUserByUserId);

module.exports = router;
