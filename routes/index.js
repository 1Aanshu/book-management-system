const router = require("express").Router();
const bookRouter = require("../modules/books/book.route");

const apiVersion = "/api/v1";
router.get("/", (req, res, next) => {
  res.json({ msg: "hello from router index" });
});
router.use(`${apiVersion}/blogs`, bookRouter);
module.exports = router;
