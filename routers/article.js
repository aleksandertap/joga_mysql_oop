const express = require('express');

const articleControllerClass = require('../controllers/article');
const articleController = new articleControllerClass();


const router = express.Router();


router.get('/', (req, res) => articleController.getAllArticles(req, res));
router.get('/article/:slug', (req, res) => articleController.getArticleBySlug(req, res));

module.exports = router;

console.log("test")