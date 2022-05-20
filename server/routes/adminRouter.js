const Router = require("express");
const router = new Router();
const adminController = require("../controllers/adminController")

router.get("/auth", adminController.check);
router.post("/registration", adminController.registration);
router.post("/login", adminController.login);

module.exports = router;
