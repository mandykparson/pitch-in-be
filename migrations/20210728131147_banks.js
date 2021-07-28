
exports.up = function(knex) {
    return knex.schema.createTable('banks', t => {
        t.increments();
        t.string('name');
        t.string('icon');
    })
};

exports.down = function(knex) {
  
};
