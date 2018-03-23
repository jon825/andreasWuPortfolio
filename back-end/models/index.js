// Initializing knex and connecting to our db
const knex = require('knex')({
  client: 'postgres',
  connection: {
    host     : '127.0.0.1',
    user     : 'postgres',
    password : 'postgres',
    database : 'a_wudb',
    charset  : 'utf8'
  }
});

const bookshelf = require('bookshelf')(knex);

const Image = bookshelf.Model.extend({
  tableName: 'images'
});

const Video = bookshelf.Model.extend({
  tableName: 'videos'
});

const Admin = bookshelf.Model.extend({
  tableName: 'admin'
});



module.exports = {
    Image,
    Video,
    Admin
};
