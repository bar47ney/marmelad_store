const Router = require("express");
const router = new Router();
const VendorController = require("../controllers/vendorController")

router.get("/", VendorController.getAll);
router.get("/:id");
router.post("/", VendorController.create);

module.exports = router;
