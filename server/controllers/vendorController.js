const { Vendor } = require("../models/models");
const ApiError = require("../error/ApiError");

class VendorController {
  async create(req, res, next) {
    try {
      const { name, raiting, phone, email, addressId } = req.body;

      const vendor = await Vendor.create({
        name,
        raiting,
        phone,
        email,
        addressId,
      });

      return res.json(vendor);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getAll(req, res) {
    let { limit, page } = req.query;
    page = page || 1;
    limit = limit || 10;
    let offset = page * limit - limit;
    const vendors = await Vendor.findAndCountAll({ limit, offset });
    return res.json(vendors);
  }
  async getOne(req, res) {}
  async delete(req, res) {}
  async update(req, res) {}
}

module.exports = new VendorController();
