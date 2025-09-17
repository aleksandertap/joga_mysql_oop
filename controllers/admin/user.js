const userDbModel = require("../../models/user");
const userModel = new userDbModel();

class adminUserController {
  async getUsers(req, res) {
    const users = await userModel.findAll();
    res.render("admin/users", { users: users });
  }

  async deleteUser(req, res) {
    const userId = req.params.id;
    const affectedRows = await userModel.delete(userId);
    res.redirect("/admin/users");
}
  
  async editUser(req, res) {
    const userId = req.params.id;
    const user = await userModel.findById(userId);
    res.render("admin/editUser", { user: user });
  }

  async updateUser(req, res) {
    const userId = req.params.id;
    const { username, email, role } = req.body;
    const affectedRows = await userModel.update(userId, { username, email, role });
    res.redirect("/admin/users");
  }
}

module.exports = adminUserController;
