exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists("admin", function(table) {

    table.increments("id").primary(); // adds incrementing int for id
    table
      .string("username") // adds a string column
      .unique() // which has to be unique
      .notNullable(); // and is required
    table
      .string("password") // adds a string column
      .unique() // which has to be unique
      .notNullable(); // and is required
    })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("admin");

};
