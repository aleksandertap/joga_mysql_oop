const articleDbModel = require("../models/article");
const ArticleModel = new articleDbModel();

class articleController {
  async getAllArticles(req, res) {
    try {
      const articles = await ArticleModel.findAll();
      res.status(201).json({ articles: articles });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch articles" });
    }
  }

  async getArticleBySlug(req, res) {
    try {
        const article = await ArticleModel.findOne(req.params.slug);
        res.status(201).json({ article: article });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch article" });
    }
}}


module.exports = articleController;
