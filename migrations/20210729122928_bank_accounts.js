
exports.up = function(knex) {
    return knex.schema.createTable('bank_accounts', t => {
        t.increments();
        t.integer('account_number');
        t.integer('total');
        t.integer('bank_id').references('id').inTable('banks');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('bank_accounts');
};
