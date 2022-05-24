const Router = require("express");
const router = new Router();
const OrderController = require("../controllers/orderController")

router.get("/", OrderController.getAll);
router.get("/:id", OrderController.getOne);
router.post("/", OrderController.create);

module.exports = router;
