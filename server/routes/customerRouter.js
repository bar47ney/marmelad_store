const Router = require("express");
const router = new Router();
const CustomerController = require("../controllers/customerController")

router.get("/", CustomerController.getAll);
router.get("/:id", CustomerController.getOne);
router.post("/", CustomerController.create);

module.exports = router;
