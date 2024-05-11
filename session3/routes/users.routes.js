const express = require("express");
const {
  getUsers,
  getUserByUserId,
  searchUser,
} = require("../controllers/users.controllers");

const router = express.Router();

router.get("/", getUsers);

router.get("/search", searchUser);

router.get("/:uuid", getUserByUserId);

module.exports = router;
