const usersData = require("../users.json");

const getUsers = (req, res) => {
  res.json(usersData.data);
};

const getUserByUserId = (req, res) => {
  const reqUserObj = usersData.data.find(
    (user) => user.login.uuid === req.params.uuid
  );
  if (reqUserObj) return res.json(reqUserObj);
  res.status(404).json({ message: "User could not be found" });
};

// const filterByGender = (users, gender) =>
//   users.filter((user) => user.gender === gender);

// const filterByAge = (users, age) =>
//   users.filter((user) => user.dob.age === age);

const searchUser = (req, res) => {
  const { gender, age } = req.query;
  if (gender && age) {
    // const filteredByGender = filterByGender(usersData.data, gender);
    // return res.send(filterByAge(filteredByGender, parseInt(age)));
    return res.json(
      usersData.data.filter(
        (user) => user.gender === gender && user.dob.age === parseInt(age)
      )
    );
  } else if (gender)
    return res.json(usersData.data.filter((user) => user.gender === gender));
  else if (age)
    return res.json(
      usersData.data.filter((user) => user.dob.age === parseInt(age))
    );
  else
    return res.status(400).json({
      message: "One of 'gender' or 'age' must be passed as query param",
    });
};

module.exports = { getUsers, getUserByUserId, searchUser };
