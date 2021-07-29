
exports.up = function(knex) {
    return knex.schema.createTable('user_pitches', t => {
        t.increments();
        t.integer('user_id').references('id').inTable('users');
        t.integer('pitch_id').references('id').inTable('pitches');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('user_pitches');
};
