const bcrypt = require("bcrypt");
const UserDbModel = require("../models/user");
const userModel = new UserDbModel();

class UserController {
  async register(req, res) {
    const existingUser = await userModel.findOne("username", req.body.username);
    if (existingUser) {
      return res.status(409).json({ error: "Username already exists" });
    }

    const validPassword =
      typeof req.body.password === "string" &&
      req.body.password.length >= 6 &&
      /\d/.test(req.body.password);
    if (!validPassword) {
      return res.status(400).json({
        error:
          "Password must be at least 6 characters and include at least one number",
      });
    }

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

  async login(req, res) {
    const userData = await userModel.findOne("username", req.body.username);
    if (!userData) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    const passwordMatch = await bcrypt.compare(
      req.body.password,
      userData.password
    );
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    req.session.user = { username: userData.username, userId: userData.id, role: userData.role };
    res.json({ message: "User logged in", user: req.session.user });
  }

  async logout(req, res) {
    if(!req.session.user){
      return res.status(400).json({ error: "No user is logged in" });
    }
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ error: "Failed to log out" });
      }
      res.json({ message: "User logged out" });
    });
  }
}

module.exports = UserController;
