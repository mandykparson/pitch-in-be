exports.up = function(knex) {
    return knex.schema.createTable('requests', t => {
        t.increments();
        t.string('description');
        t.integer('amount');
        t.integer('user_id').references('id').inTable('users');
        t.integer('pitch_id').references('id').inTable('pitches');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('requests');
};
