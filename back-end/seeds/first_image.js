
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('images')
  .del()
  .then(function () {
    return Promise.all([
      // Inserts seed entries
      knex('images').insert({
        id:0,
        filename:'Andreas_Selects _5.jpg',
        path:'uploads/images/Andreas_Selects _5.jpg'
      })
    ]);
  });
};
