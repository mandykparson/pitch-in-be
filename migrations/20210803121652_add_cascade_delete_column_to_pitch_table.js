exports.up = function(knex) {
    return knex.schema.table('user_pitches', t => {
        t.dropColumns('user_id', 'pitch_id')
    })
};

exports.down = function(knex) {
    return knex.schema.table('user_pitches', t => {
        t.integer('user_id').references('id').inTable('users').onDelete('CASCADE')
        t.integer('pitch_id').references('id').inTable('pitches').onDelete('CASCADE')
    });
};
