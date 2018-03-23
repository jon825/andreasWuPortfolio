
exports.seed = function(knex, Promise) {
  return knex('images')
  .del()
  .then(function () {
    return Promise.all([
      // Inserts seed entries
      knex('admin').insert({
        id:0,
        username:'test1',
        password:'test'
      })
    ]);
  });
};
