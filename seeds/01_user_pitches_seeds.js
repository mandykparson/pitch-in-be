
exports.seed = function(knex) {
  return knex('user_pitches').del()
    .then(function () {
      return knex('user_pitches').insert([
        {user_id: 1, pitch_id: 2},
        {user_id: 3, pitch_id: 2},
        {user_id: 4, pitch_id: 2},
        {user_id: 5, pitch_id: 2},
        {user_id: 1, pitch_id: 3},
        {user_id: 4, pitch_id: 3},
        {user_id: 6, pitch_id: 3},
        {user_id: 7, pitch_id: 3},
      ]);
    });
};
