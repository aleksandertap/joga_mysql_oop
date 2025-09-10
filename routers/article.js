const express = require('express');

const articleControllerClass = require('../controllers/article');
const articleController = new articleControllerClass();


const router = express.Router();


router.get('/', (req, res) => articleController.getAllArticles(req, res));
router.get('/article/:slug', (req, res) => articleController.getArticleBySlug(req, res));
router.post('/article/create', (req, res) => articleController.createArticle(req, res));

module.exports = router;
