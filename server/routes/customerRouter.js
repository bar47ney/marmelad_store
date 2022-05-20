const Router = require("express");
const router = new Router();
const CustomerController = require("../controllers/customerController")

router.get("/", CustomerController.getAll);
router.get("/:id");
router.post("/", CustomerController.create);

module.exports = router;
