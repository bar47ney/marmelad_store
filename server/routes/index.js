const Router = require("express")
const router = new Router()
const addressRouter = require("./addressRouter")
const adminRouter = require("./adminRouter")
const customerRouter = require("./customerRouter")
const newsRouter = require("./newsRouter")
const orderContentRouter = require("./orderContentRouter")
const orderRouter = require("./orderRouter")
const productRouter = require("./productRouter")
const vendorRouter = require("./vendorRouter")

router.use("/address", addressRouter)
router.use("/admin", adminRouter)
router.use("/customer", customerRouter)
router.use("/news", newsRouter)
router.use("/orderContent", orderContentRouter)
router.use("/order", orderRouter)
router.use("/product", productRouter)
router.use("/vendor", vendorRouter)

module.exports = router