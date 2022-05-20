const { Customer } = require("../models/models");
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
      } = req.body;

      const { photo } = req.files;
      let fileName = uuid.v4() + ".jpg"
      photo.mv(path.resolve(__dirname, "..", "static", fileName))

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
    const customers = await Customer.findAll();
    return res.json(customers);
  }
  async getOne(req, res) {}
  async delete(req, res) {}
  async update(req, res) {}
}

module.exports = new CustomerController();
