const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
//require('dotenv').config()

const currenciesRouter = require("./routes/currencies.routes");
const userRouter = require("./routes/users.routes");
const blogRouter = require("./routes/blogs.routes");
// const verifyAuth = require("./middlewares/verifyAuth");

const app = express();
const PORT = 8082;
const DB_URI = process.env.DB_URI;

app.use(express.json());

const connectDB = async () => {
  try {
    await mongoose.connect(`${DB_URI}`);
    console.log("Connected to DB at", DB_URI);
  } catch (e) {
    console.log("Failed to connect to DB", e);
  }
};
connectDB();
// app.use(verifyAuth);

app.get("/", (req, res) => {
  res.send("<h1>Currency Database</h1>");
});

app.get("/status", (req, res) => {
  res.send("api working");
});

app.use("/currencies", currenciesRouter);

// app.use(verifyAuth);

app.use("/users", userRouter);
app.use("/blogs", blogRouter);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
