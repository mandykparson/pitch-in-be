const { Model } = require('objection');
const database = require('../db');
Model.knex(database);

class UserPitch extends Model {
    static tableName = 'user_pitches';
}

module.exports = { UserPitch };