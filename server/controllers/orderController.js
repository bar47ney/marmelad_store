const { Order, Customer, OrderContent, Product } = require("../models/models");
const ApiError = require("../error/ApiError");

class OrderController {
  // async create(req, res, next) {
  //   try {
  //     const {
  //       date,
  //       expireDate,
  //       paymentDay,
  //       isPay,
  //       totalPrice,
  //       customerId,
  //     } = req.body;
  //     const order = await Order.create({
  //       date,
  //       expireDate,
  //       paymentDay,
  //       isPay,
  //       totalPrice,
  //       customerId
  //     });

  //     return res.json(order);
  //   } catch (e) {
  //     next(ApiError.badRequest(e.message));
  //   }
  // }

  async create(req, res, next) {
    try {
      const { name, phone, email, productQty, productId } = req.body;

      if (!name || !phone || !email) {
        return next(ApiError.badRequest("Неверные данные!"));
      }

      let condidate = await Customer.findOne({
        where: { name, phone, email },
      });

      if (!condidate) {
        condidate = await Customer.create({
          name,
          phone,
          email,
        });
      }

      const product = await Product.findOne({ where: { id: productId } });

      const order = await Order.create({
        customerId: condidate.id,
        totalPrice: productQty * product.price,
      });

      const orderContent = await OrderContent.create({
        productQty,
        productId,
        orderId: order.id
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
