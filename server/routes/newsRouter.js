const Router = require("express");
const router = new Router();
const NewsController = require("../controllers/newsController")

router.get("/", NewsController.getAll);
router.get("/:id");
router.post("/", NewsController.create);

module.exports = router;
