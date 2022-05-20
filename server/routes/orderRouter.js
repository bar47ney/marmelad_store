const Router = require("express");
const router = new Router();
const OrderController = require("../controllers/orderController")

router.get("/", OrderController.getAll);
router.get("/:id");
router.post("/", OrderController.create);

module.exports = router;
