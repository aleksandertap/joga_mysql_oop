const bcrypt = require("bcrypt");
const UserDbModel = require("../models/user");
const userModel = new UserDbModel();

class UserController {
  async register(req, res) {
    const cryptPassword = await bcrypt.hash(req.body.password, 10);
    const registeredId = await userModel.create({
      username: req.body.username,
      email: req.body.email,
      password: cryptPassword,
    });
    if (registeredId) {
      const userData = await userModel.findById(registeredId);
      req.session.user = { username: userData.username, userId: userData.id };
      res
        .status(201)
        .json({ message: "New user is registered", user: req.session.user });
    }
  }
}

module.exports = UserController;
