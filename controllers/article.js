const articleDbModel = require("../models/article");
const ArticleModel = new articleDbModel();

class articleController {
  async getAllArticles(req, res) {
    const articles = await ArticleModel.findAll();
    res.render("index", { articles: articles });
  }

  async getArticleBySlug(req, res) {
    const article = await ArticleModel.findOne(req.params.slug);
    res.render("article", { article: article });
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
    res.status(201).json({
      message: `created article with id ${articleId}`,
      article: { id: articleId, ...newArticle },
    });
  }

  async updateArticle(req, res) {
    const articleId = req.params.id;
    const updatedArticleData = req.body;
    const affectedRows = await ArticleModel.update(
      articleId,
      updatedArticleData
    );
    res.status(201).json({
      message: `updated article with id ${articleId}`,
      article: { id: articleId, ...updatedArticleData },
    });
  }

  async deleteArticle(req, res) {
    const articleId = req.params.id;
    const affectedRows = await ArticleModel.delete(articleId);

    if (affectedRows === 0) {
      return res.status(404).json({ error: "Article not found" });
    }
    res.status(201).json({
      message: `deleted article with id ${articleId}`,
    });
  }
}

module.exports = articleController;
