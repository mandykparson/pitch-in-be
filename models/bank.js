const { Model } = require('objection');
const database = require('../db');
Model.knex(database);

class Bank extends Model {
    static tableName = 'banks';

}

module.exports = { Bank };