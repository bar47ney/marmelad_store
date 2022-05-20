const ApiError = require("../error/ApiError")

class AdminController {
  async registration(req, res) {}
  async login(req, res) {}

  async check(req, res, next) {
    const {id} = req.query
    if (!id){
        return next(ApiError.badRequest("Нет ID"))
    }
    res.json(id)
  }
}

module.exports = new AdminController()
