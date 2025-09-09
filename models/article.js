const BaseSQLModel = require("./base");

class ArticleModel extends BaseSQLModel {
  constructor() {
    super("article");
  }

  // async findAll() {
  //   return super.findAll();
  // }

  async findOne(slug) {
    return super.findOne('slug', slug);
  }
}

module.exports = ArticleModel;
