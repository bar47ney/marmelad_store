const { OrderContent } = require("../models/models");
const ApiError = require("../error/ApiError");

class OrderContentController {
  async create(req, res, next) {
    // try {
    const { productQty } = req.body;
    const orderContent = await OrderContent.create({
      productQty,
    });

    return res.json(orderContent);
    // } catch (e) {
    //   next(ApiError.badRequest(e.message));
    // }
  }
  async getAll(req, res) {}
  async getOne(req, res) {}
  async delete(req, res) {}
  async update(req, res) {}
}

module.exports = new OrderContentController();
