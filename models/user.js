const { Model } = require('objection');
const database = require('../db');

Model.knex(database);

const { Pitch } = require('./pitch')

class User extends Model {
    static tableName = 'users';

    static relationMappings = {
        pitches: {
            relation: Model.ManyToManyRelation,
            modelClass: Pitch,
            join: {
                from: 'users.id',
                through: {
                    from: 'user_pitches.user_id',
                    to: 'user_pitches.pitch_id'
                },
                to: 'pitches.id'
            }
        }
    };
}

module.exports = { User };