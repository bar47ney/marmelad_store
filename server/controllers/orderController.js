const { Order } = require("../models/models");
const ApiError = require("../error/ApiError");

class OrderController {
  async create(req, res, next) {
    try {
      const {
        date,
        expireDate,
        paymentDay,
        isPay,
        totalPrice,
        customerId,
      } = req.body;
      const order = await Order.create({
        date,
        expireDate,
        paymentDay,
        isPay,
        totalPrice,
        customerId
      });

      return res.json(order);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getAll(req, res) {
    let { limit, page } = req.query;
    page = page || 1;
    limit = limit || 10;
    let offset = page * limit - limit;
    const orders = await Order.findAndCountAll({ limit, offset });
    return res.json(orders);
  }
  async getOne(req, res) {}
  async delete(req, res) {}
  async update(req, res) {}
}

module.exports = new OrderController();
