const BaseSQLModel = require('./base');


class ArticleModel extends BaseSQLModel {
    constructor() {
        super('article'); 
    }

    async findAll() {
        return super.findAll();
    }
}

module.exports = ArticleModel;