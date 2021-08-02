const { Model } = require('objection');
const database = require('../db');
const { User } = require('./user')
const { Pitch } = require('./pitch')
Model.knex(database);

class Request extends Model {
    static tableName = 'requests';

    static relationMappings = {
        user: {
            relation: Model.BelongsToOneRelation,
            modelClass: User,
            join: {
                from: 'requests.user_id',
                to: 'users.id'
            }
        },
        pitch: {
            relation: Model.BelongsToOneRelation,
            modelClass: Pitch,
            join: {
                from: 'requests.pitch_id',
                to: 'pitches.id'
            }
        }
    }
}

module.exports = { Request };