const usersData = require("../users.json");
const userSearchSchema = require("../schemas/userSearch.schema");

const validateUserSearch = (gender, age) => {
  const result = userSearchSchema.validate({ gender, age });
  return result.error;
};

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
  let { gender, age } = req.query;
  const errors = validateUserSearch(gender, age);
  if (errors)
    return res.status(422).json({ messsage: errors.details[0].message });
  if (gender && age) {
    // const filteredByGender = filterByGender(usersData.data, gender);
    // return res.send(filterByAge(filteredByGender, parseInt(age)));
    // if (!["male", "female"].includes(gender))
    //   return res
    //     .status(400)
    //     .json({ message: "Gender must be either 'male' or 'female'" });
    // if (isNaN(age))
    //   return res.status(400).json({ message: "Age must be a number" });
    // if (age < 1 && age > 100)
    //   return res
    //     .status(400)
    //     .json({ message: "Age must be a number between 1 to 100" });
    return res.json(
      usersData.data.filter(
        (user) => user.gender === gender && user.dob.age === parseInt(age)
      )
    );
  } else if (gender) {
    // if (!["male", "female"].includes(gender))
    //   return res
    //     .status(400)
    //     .json({ message: "Gender must be either 'male' or 'female'" });
    return res.json(usersData.data.filter((user) => user.gender === gender));
  } else if (age) {
    // if (isNaN(age))
    //   return res.status(400).json({ message: "Age must be a number" });
    // if (age < 1 && age > 100)
    //   return res
    //     .status(400)
    //     .json({ message: "Age must be a number between 1 to 100" });
    return res.json(
      usersData.data.filter((user) => user.dob.age === parseInt(age))
    );
  }
  // else
  //   return res.status(400).json({
  //     message: "One of 'gender' or 'age' must be passed as query param",
  //   });
};

module.exports = { getUsers, getUserByUserId, searchUser };
