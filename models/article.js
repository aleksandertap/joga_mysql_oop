const BaseSQLModel = require("./base");

class ArticleModel extends BaseSQLModel {
  constructor() {
    super("article");
  }

  async findOne(slug) {
    return super.findOne('slug', slug);
  }

  async findMany(author) {
    return super.findMany('author_id', author.id);
  }

  async create(article) {
    return super.create(article);
  }
}

module.exports = ArticleModel;
