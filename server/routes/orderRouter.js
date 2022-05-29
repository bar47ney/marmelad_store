const Router = require("express");
const router = new Router();
const OrderController = require("../controllers/orderController")

router.get("/", OrderController.getAll);
router.get("/:id", OrderController.getOne);
router.get("/customer/:id", OrderController.getAllByCustomer);
router.post("/", OrderController.create);
router.delete("/deleteallbypay", OrderController.deleteAllByPay);
router.delete("/:id", OrderController.delete);
router.put("/:id", OrderController.update);

module.exports = router;
