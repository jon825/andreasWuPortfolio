
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('videos')
  .del()
  .then(function () {
    return Promise.all([
      // Inserts seed entries
      knex('videos').insert({
        id:0,
        filename:'test.mp4',
        path:'uploads/videos/test.mp4'
      })
    ]);
  });
};
