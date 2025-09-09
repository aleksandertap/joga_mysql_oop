const articleDbModel = require('../models/article');
const ArticleModel = new articleDbModel();

class articleController {
    async getAllArticles(req, res) {
        try {
            const articles = await ArticleModel.findAll();
            res.status(201).json({articles:articles});
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch articles' });
        }
}} 

module.exports = articleController