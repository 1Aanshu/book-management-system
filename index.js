require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const indexRouter = require("./routes");
const app = express();
const PORT = process.env.PORT;

mongoose.connect("mongodb://localhost:27017/book-mgmt").then(() => {
  console.log("Database connected");
});

app.use(express.json());
app.use(morgan("dev"));
app.use(express.static("public"));

app.use("/", indexRouter);

app.use((err, req, res, next) => {
  err = err ? err.toString() : "Something went wrong";
  res.status(500).json({ msg: err });
});

app.listen(PORT, () => {
  console.log(
    `App is running on port ${PORT} or Application running at ${PORT} port`
  );
});
