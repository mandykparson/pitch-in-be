exports.up = function(knex) {
    return knex.schema.table('user_pitches', t => {
        t.integer('user_id').references('id').inTable('users').onDelete('CASCADE')
        t.integer('pitch_id').references('id').inTable('pitches').onDelete('CASCADE')
    })
};

exports.down = function(knex) {
    return knex.schema.table('user_pitches', t => {
        t.dropForeign('user_id')
        t.dropForeign('pitch_id')
        t.integer('user_id').references('id').inTable('users');
        t.integer('pitch_id').references('id').inTable('pitches');
    });
};
