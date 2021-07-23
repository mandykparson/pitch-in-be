const { Model } = require('objection');
const database = require('../db');
Model.knex(database);

class Pitch extends Model {
    static tableName = 'pitches';

}

module.exports = { Pitch };