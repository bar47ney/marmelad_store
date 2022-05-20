const Router = require("express");
const router = new Router();
const AddressController = require("../controllers/addressController")

router.get("/", AddressController.getAll);
router.get("/:id");
router.post("/", AddressController.create);

module.exports = router;
