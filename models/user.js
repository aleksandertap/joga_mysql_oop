const BaseSQLModel = require("./base");

class UserModel extends BaseSQLModel {
  constructor() {
    super("user");
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

  async findOne(where, value) {
    return super.findOne(where, value);
  }

}

module.exports = UserModel;