
exports.up = function(knex) {
    return knex.schema.createTable('pitches', t => {
        t.increments();
        t.string('title');
        t.string('description');
        t.string('image');
        t.integer('total')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('pitches');
};
