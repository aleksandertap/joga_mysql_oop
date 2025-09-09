const express = require('express');

const articleControllerClass = require('../controllers/article');
const articleController = new articleControllerClass();


const router = express.Router();


router.get('/', (req, res) => articleController.getAllArticles(req, res));

module.exports = router;