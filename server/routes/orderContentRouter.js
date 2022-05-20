const Router = require("express");
const router = new Router();
const OrderContentController = require("../controllers/orderContentController")

router.get("/");
router.get("/:id");
router.post("/", OrderContentController.create);

module.exports = router;
