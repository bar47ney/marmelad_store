const { Address } = require("../models/models");
const ApiError = require("../error/ApiError");

class AddressController {
  async create(req, res, next) {
    try {
      const { country, city, street, home } = req.body;
      const address = await Address.create({
        country,
        city,
        street,
        home,
      });

      return res.json(address);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    let { limit, page } = req.query;
    page = page || 1;
    limit = limit || 10;
    let offset = page * limit - limit;
    const addresses = await Address.findAndCountAll({ limit, offset });
    return res.json(addresses);
  }
  async getOne(req, res) {}
  async delete(req, res) {}
  async update(req, res) {}
}

module.exports = new AddressController();
