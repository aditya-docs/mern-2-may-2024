const express = require("express");
const currenciesRouter = require("./routes/currencies.routes");
const userRouter = require("./routes/users.routes");

const app = express();
const PORT = 8082;

app.get("/", (req, res) => {
  res.send("<h1>Currency Database</h1>");
});

app.get("/status", (req, res) => {
  res.send("api working");
});

app.use("/currencies", currenciesRouter);

app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
