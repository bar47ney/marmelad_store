const { Product } = require("../models/models");
const ApiError = require("../error/ApiError");
const uuid = require("uuid");
const path = require("path");

class ProductController {
  async create(req, res, next) {
    try {
      const {
        name,
        party,
        productCode,
        typeProduct,
        brandProduct,
        price,
        title,
        description,
        orderContentId,
        vendorId,
      } = req.body;

      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));

      const product = await Product.create({
        name,
        party,
        productCode,
        typeProduct,
        brandProduct,
        price,
        img: fileName,
        title,
        description,
        orderContentId,
        vendorId,
      });

      return res.json(product);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  
  async getAll(req, res) {
    let { limit, page } = req.query;
    page = page || 1;
    limit = limit || 10;
    let offset = page * limit - limit;
    const products = await Product.findAndCountAll({ limit, offset });
    return res.json(products);
  }

  async getAllByVendor(req, res) {
    const { vendorId } = req.params;
    const products = await Product.findAll({ where: { vendorId } });
    return res.json(products);
  }

  async getOne(req, res) {}
  async delete(req, res) {}
  async update(req, res) {}
}

module.exports = new ProductController();
