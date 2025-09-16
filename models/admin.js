const BaseSQLModel = require("./base");

class AdminModel extends BaseSQLModel {
  constructor() {
    super("user");
  }

  async findOne(where, value) {
    return super.findOne(where, value);
  }

  async findById(id) {
    return super.findById(id);
  }
  async create(user) {
    return super.create(user);
  }

  async update(id, user) {
    return super.update(id, user);
  }

  async delete(id) {
    return super.delete(id);
  }
  async findMany(where, value) {
    return super.findMany(where, value);
  }
}
module.exports = AdminModel;
