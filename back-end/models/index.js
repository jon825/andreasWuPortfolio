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
    tableName: 'images' // what you named your table as
});

module.exports = {
    Image
}
