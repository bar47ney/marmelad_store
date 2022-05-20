const { News } = require("../models/models");
const ApiError = require("../error/ApiError");
const uuid = require("uuid");
const path = require("path");

class NewsController {
  async create(req, res, next) {
    try {
      const { name, theme, author, body, date } = req.body;

      const { image } = req.files;
      let fileName = uuid.v4() + ".jpg";
      image.mv(path.resolve(__dirname, "..", "static", fileName));

      const news = await News.create({
        name,
        theme,
        author,
        body,
        date,
        image: fileName,
      });

      return res.json(news);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    let { limit, page } = req.query;
    page = page || 1;
    limit = limit || 10;
    let offset = page * limit - limit;
    const newss = await News.findAndCountAll({ limit, offset });
    return res.json(newss);
  }

  async getAll(req, res) {
    let { limit, page } = req.query;
    page = page || 1;
    limit = limit || 10;
    let offset = page * limit - limit;
    const newss = await News.findAndCountAll({ limit, offset });
    return res.json(newss);
  }

  async getAllByName(req, res) {
    const { name } = req.query;
    const newss = await News.findAll({ where: { name } });
    return res.json(newss);
  }
  async getOne(req, res) {
    const { id } = req.params;
    const news = await News.findOne({ where: { id } });
    return res.json(news)
  }
  async delete(req, res) {}
  async update(req, res) {}
}

module.exports = new NewsController();
