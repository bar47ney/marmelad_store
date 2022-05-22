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
    return http.get(`/${this.models}?${field}=${value}`);
  }
  getAll() {
    return http.get(`api/${this.models}`);
  }
  get(page, number) {
    return http.get(`/${this.models}/?_page=${page}&_limit=${number}`);
  }
  getOneById(id) {
    return http.get(`/${this.models}/${id}`);
  }
  create(data) {
    return http.post(`/${this.models}`, data);
  }
  update(id, data) {
    return http.put(`/${this.models}/${id}`, data);
  }
  delete(id) {
    return http.delete(`/${this.models}/${id}`);
  }
}
