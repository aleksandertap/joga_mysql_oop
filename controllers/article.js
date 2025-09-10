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
  }

  async createArticle(req, res) {
    const newArticle = {
      name: req.body.name,
      slug: req.body.slug,
      image: req.body.image,
      body: req.body.body,
      published: new Date().toISOString().slice(0, 19).replace("T", " "),
      author_id: req.body.author_id,
    };
    const articleId = await ArticleModel.create(newArticle);
    res
      .status(201)
      .json({
        message: `created article with id ${articleId}`,
        article: { id: articleId, ...newArticle },
      });
  }
}

module.exports = articleController;
