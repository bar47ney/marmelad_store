import http from "../http";

export default class Crud {
  constructor(models) {
    this.models = models;
    this.getAll = this.getAll.bind(this);
    this.get = this.get.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
    this.getOneBy = this.getOneBy.bind(this)
    this.getOneById = this.getOneById.bind(this)
  }
  getOneBy(field, value) {
    return http.get(`api/${this.models}?${field}=${value}`);
  }
  getAll() {
    return http.get(`api/${this.models}`);
  }
  getAllByExample(example, id) {
    return http.get(`api/${this.models}/${example}/${id}`);
  }
  get(limit, page) {
    return http.get(`api/${this.models}/?page=${page}&limit=${limit}`);
  }
  getOneById(id) {
    return http.get(`api/${this.models}/${id}`);
  }
  create(data) {
    return http.post(`api/${this.models}`, data);
  }
  update(id, data) {
    return http.put(`api/${this.models}/${id}`, data);
  }
  delete(id) {
    return http.delete(`api/${this.models}/${id}`);
  }
  deleteAllByPay() {
    return http.delete(`api/${this.models}/deleteallbypay`);
  }
}
