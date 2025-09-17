const express = require('express');
const router = express.Router();
const adminControllerClass = require('../controllers/admin');
const adminController = new adminControllerClass();
const { isAuthenticated, isAdmin } = require('../utils/auth');



router.get('/admin/users',  isAuthenticated, isAdmin, (req, res) => adminController.getAllUsers(req, res));
router.get('/admin/users/:id',  isAuthenticated, isAdmin, (req, res) => adminController.getUserById(req, res));
router.put('/admin/users/:id',  isAuthenticated, isAdmin, (req, res) => adminController.updateUser(req, res));
router.delete('/admin/users/:id',  isAuthenticated, isAdmin, (req, res) => adminController.deleteUser(req, res));
router.patch('/admin/users/:id/role', isAuthenticated, isAdmin, (req, res) => adminController.changeUserRole(req, res));

module.exports = router;