const router = require("express").Router();

router.get("/", (req, res, next) => {
  try {
    res.json({ msg: "hello from book get route" });
  } catch (e) {
    next(e);
  }
});

router.post("/", (req, res, next) => {
  try {
    const data = req.body;
    console.log({ data });
    res.json({ msg: "Hello from book post route" });
  } catch (e) {
    next(e);
  }
});

router.put("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    console.log({ id, data });
    res.json({ msg: "Hello from book put route" });
  } catch (e) {
    next(e);
  }
});

router.patch("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    console.log({ id, data });
    res.json({ msg: "Hello from book patch route" });
  } catch (e) {
    next(e);
  }
});
router.delete("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    console.log({ id });
    res.json({ msg: "Hello from book delete route" });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
