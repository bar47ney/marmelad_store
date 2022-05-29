const Router = require("express");
const router = new Router();
const ProductController = require("../controllers/productController")

router.get("/", ProductController.getAll);
router.get("/vendor/:vendor", ProductController.getAllByVendor);
router.get("/:id", ProductController.getOne);
router.post("/", ProductController.create);

module.exports = router;
