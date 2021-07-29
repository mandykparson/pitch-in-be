const { Model } = require('objection');
const database = require('../db');
Model.knex(database);
const { Bank } = require('./bank')

class BankAccount extends Model {
    static tableName = 'bank_accounts';

    static relationMappings = {
        bank: {
            relation: Model.BelongsToOneRelation,
            modelClass: Bank,
            join: {
                from: 'bank_accounts.bank_id',
                to: 'banks.id'
            }
        }
    }
}

module.exports = { BankAccount };