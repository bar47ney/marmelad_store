const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Admin } = require("../models/models");

const generateJwt = (id, name, login) => {
  return jwt.sign({ id, name, login }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};

class AdminController {
  async registration(req, res, next) {
    const { name, login, password } = req.body;
    if (!name || !login || !password) {
      return next(ApiError.badRequest("Неправильный логин или пароль!"));
    }

    const condidate = await Admin.findOne({ where: { login } });
    if (condidate) {
      return next(ApiError.badRequest("Такой администратор уже существует!"));
    }

    const hashPassword = await bcrypt.hash(password, 5);
    const admin = await Admin.create({ name, login, password: hashPassword });
    const token = generateJwt(admin.id, admin.name, admin.login);
    return res.json({ token });
  }
  async login(req, res, next) {
    const { login, password } = req.body;
    const admin = await Admin.findOne({ where: { login } });
    if (!admin) {
      return next(ApiError.internal("Неверный логин!"));
    }
    let comparePassword = bcrypt.compareSync(password, admin.password);
    if (!comparePassword) {
      return next(ApiError.internal("Неверный пароль!"));
    }
    const token = generateJwt(admin.id, admin.name, admin.login);
    return res.json({ token });
  }

  async check(req, res, next) {
    const token = generateJwt(admin.id, admin.name, admin.login);
    return res.json({ token });
  }
}

module.exports = new AdminController();
