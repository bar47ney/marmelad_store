const Router = require("express");
const router = new Router();
const ProductController = require("../controllers/productController")

router.get("/", ProductController.getAll);
router.get("/vendor/:vendorId", ProductController.getAllByVendor);
router.get("/:id");
router.post("/", ProductController.create);

module.exports = router;
