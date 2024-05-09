const usersData = require("../users.json");

const getUsers = (req, res) => {
  res.json(usersData.data);
};

const getUserByUserId = (req, res) => {
  const reqUserObj = usersData.data.find(
    (user) => user.login.uuid === req.params.uuid
  );
  if (reqUserObj) return res.json(reqUserObj);
  res.status(404).send({ message: "User could not be found" });
};

const searchUser = (req, res) => {};

module.exports = { getUsers, getUserByUserId, searchUser };
