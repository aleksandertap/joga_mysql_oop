const bcrypt = require("bcrypt");
const AdminDbModel = require("../models/admin");
const adminModel = new AdminDbModel();

class adminController{
    async getAllUsers(req, res) {
        try {
            const users = await adminModel.findAll();
            res.status(201).json({ users: users });
        } catch (error) {
            res.status(500).json({ error: "Failed to fetch users" });
        }}

    async getUserById(req, res) {
        try {
            const user = await adminModel.findById(req.params.id);
            res.status(201).json({ user: user });
        } catch (error) {
            res.status(500).json({ error: "Failed to fetch user" });
        }
    }

    async updateUser(req, res) {
        const userId = req.params.id;
        const updatedUserData = req.body;
        const affectedRows = await adminModel.update(userId, updatedUserData);
        res
            .status(201)
            .json({
                message: `updated user with id ${userId}`,
                user: { id: userId, ...updatedUserData },
            });
    }

    async deleteUser(req, res) {
        const userId = req.params.id;
        const affectedRows = await adminModel.delete(userId);
        res
            .status(201)
            .json({
                message: `deleted user with id ${userId}`,
            });
    }

    async changeUserRole(req, res) {
        const userId = req.params.id;
        const newRole = req.body.role;
        if (!["user", "admin"].includes(newRole)) {
            return res.status(400).json({ error: "Invalid role specified" });
        }
        const affectedRows = await adminModel.update(userId, { role: newRole });
        res
            .status(201)
            .json({
                message: `changed role for user with id ${userId} to ${newRole}`,
                user: { id: userId, role: newRole },
            });
    }
}

module.exports = adminController;