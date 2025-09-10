const BaseSQLModel = require('./base');

class AuthorModel extends BaseSQLModel {
    constructor() {
        super('author'); // Pass the table name 'author' to Base
    }

    async findMany(where, value) {
        return super.findMany(where, value);
    }
}

module.exports = AuthorModel;