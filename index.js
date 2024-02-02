const express = require("express");
const indexRouter = require("./routes");

const app = express();
const PORT = 8000;

app.use(express.json());
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
