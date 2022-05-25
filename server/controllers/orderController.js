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
        condidate = await Customer.findOne({
          where: { name, phone },
        });
      }

      if (!condidate) {
        condidate = await Customer.findOne({
          where: { name, email },
        });
      }

      if (!condidate) {
        condidate = await Customer.findOne({
          where: { phone, email },
        });
      }

      let condidateInBd = true;

      if (!condidate) {
        condidate = await Customer.create({
          name,
          phone,
          email,
        });
        condidateInBd = false;
      }

      const product = await Product.findOne({ where: { id: productId } });

      const order = await Order.create({
        customerId: condidate.id,
        totalPrice: productQty * product.price,
      });

      const orderContent = await OrderContent.create({
        productQty,
        productId,
        orderId: order.id,
      });

      return res.json({ order, condidateInBd });
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    let { limit, page } = req.query;
    page = page || 1;
    limit = limit || 20;
    let offset = page * limit - limit;
    const orders = await Order.findAndCountAll({ limit, offset });
    return res.json(orders);
  }
  async getOne(req, res) {
    const { id } = req.params;
    const order = await Order.findOne({ where: { id } });

    const customer = await Customer.findOne({
      where: { id: order.customerId },
    });

    const orderContent = await OrderContent.findOne({
      where: { orderId: order.id },
    });
    const product = await Product.findOne({
      where: { id: orderContent.productId },
    });
    return res.json({ order, orderContent, product, customer });
  }
  async deleteAllByPay(req, res) {
    try {
      await Order.destroy({ where: { isPay: true } });
      return res.json({ message: "Удаление произошло успешно!" });
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async delete(req, res) {}
  async update(req, res) {
    try {
      const { id } = req.params
      const order = await Order.update(req.body, { where: { id } });
      return res.json(order);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new OrderController();
