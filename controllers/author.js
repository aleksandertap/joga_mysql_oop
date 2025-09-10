const authorDbModel = require("../models/author");
const articleDbModel = require("../models/article");
const AuthorModel = new authorDbModel();
const ArticleModel = new articleDbModel();

class authorController {
  async getAuthorById(req, res) {
    const author = await AuthorModel.findById(req.params.id);
    const articles = await ArticleModel.findMany(author);
    author["articles"] = articles;
    res.status(200).json({ author: author });
  }
}

module.exports = authorController;
