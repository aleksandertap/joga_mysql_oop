const express = require('express');
const router = express.Router();

const adminControllerClass = require('../controllers/admin');
const adminController = new adminControllerClass();


router.get('/admin/users', (req, res) => adminController.getAllUsers(req, res));
router.get('/admin/users/:id', (req, res) => adminController.getUserById(req, res));
router.put('/admin/users/:id', (req, res) => adminController.updateUser(req, res));
router.delete('/admin/users/:id', (req, res) => adminController.deleteUser(req, res));

module.exports = router;