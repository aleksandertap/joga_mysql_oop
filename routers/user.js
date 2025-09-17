const express = require('express');
const router = express.Router();
const userControllerClass = require('../controllers/user');
const userController = new userControllerClass();

router.get('/register', (req, res) => userController.showRegisterForm(req, res));
router.post('/register', (req, res) => userController.register(req, res));
router.post('/login', (req, res) => userController.login(req, res));

module.exports = router;