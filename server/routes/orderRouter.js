const Router = require("express");
const router = new Router();

router.get("/");
router.get("/:id");
router.post("/");

module.exports = router;
