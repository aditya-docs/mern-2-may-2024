const express = require("express");
const {
  getCurrencies,
  getCurrencyBySymbol,
} = require("./controllers/currencies.controllers");
const {
  getUsers,
  getUserByUserId,
  searchUser,
} = require("./controllers/users.controllers");

const app = express();
const PORT = 8082;

app.get("/", (req, res) => {
  res.send("<h1>Currency Database</h1>");
});

app.get("/status", (req, res) => {
  res.send("api working");
});

app.get("/currencies", getCurrencies);

app.get("/currencies/:symbol", getCurrencyBySymbol);

app.get("/users", getUsers);

app.get("/users/search", searchUser);

app.get("/users/:uuid", getUserByUserId);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
