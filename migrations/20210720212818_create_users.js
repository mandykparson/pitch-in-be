exports.up = function(knex) {
    return knex.schema.createTable('users', t => {
        t.increments();
        t.string('username');
        t.string('password_digest');
        t.string('full_name');
        t.string('bank');
        t.integer('bank_account');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};
