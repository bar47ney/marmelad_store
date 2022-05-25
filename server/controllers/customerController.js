const { Customer, Order } = require("../models/models");
const ApiError = require("../error/ApiError");
const uuid = require("uuid")
const path = require("path")

class CustomerController {
  async create(req, res, next) {
    try {
      const {
        name,
        login,
        password,
        phone,
        email,
        gender,
        age,
        addressId,
        // orders
      } = req.body;

      const { photo } = req.files;
      let fileName = uuid.v4() + ".jpg"
      photo.mv(path.resolve(__dirname, "..", "static", fileName))

      // if (orders){
      //   orders = JSON.parse(orders)
      //   orders.forEach(order => {
      //     Order.create({

      //     })
      //   });
      // }

      const customer = await Customer.create({
        name,
        login,
        password,
        phone,
        email,
        gender,
        age,
        photo: fileName,
        addressId,
      });

      return res.json(customer);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    let { limit, page } = req.query;
    page = page || 1;
    limit = limit || 110;
    let offset = page * limit - limit;
    const customers = await Customer.findAndCountAll({ limit, offset });
    return res.json(customers);
  }
  async getOne(req, res) {
    const { id } = req.params;
    const customer = await Customer.findOne({ where: { id } });
    return res.json(customer);
  }
  async delete(req, res) {}
  async update(req, res) {}
}

module.exports = new CustomerController();
