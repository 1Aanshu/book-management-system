const bookRouter = require("express").Router();

router.get("/", (req, res, next) => {
  res.json({ msg: "hello from book route" });
});

module.exports = bookRouter;
