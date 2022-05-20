const { OrderContent } = require("../models/models");
const ApiError = require("../error/ApiError");

class OrderContentController {
  async create(req, res, next) {
    try {
      const { productQty, orderId } = req.body;
      const orderContent = await OrderContent.create({
        productQty,
        orderId,
      });

      return res.json(orderContent);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getAll(req, res) {
    let { limit, page } = req.query;
    page = page || 1;
    limit = limit || 10;
    let offset = page * limit - limit;
    const orderContents = await OrderContent.findAndCountAll({ limit, offset });
    return res.json(orderContents);
  }
  async getOne(req, res) {}
  async delete(req, res) {}
  async update(req, res) {}
}

module.exports = new OrderContentController();
