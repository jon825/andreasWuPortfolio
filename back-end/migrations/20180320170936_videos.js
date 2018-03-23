exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists("videos", function(table) {
    table.increments("id").primary(); // adds incrementing int for id
    table
      .timestamp("created_at")
      .notNullable()
      .defaultTo(knex.fn.now());

    table
      .string("filename") // adds a string column
      .unique() // which has to be unique
      .notNullable(); // and is required

    table
      .string("path") // adds a string column
      .unique() // which has to be unique
      .notNullable(); // and is required
  });

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("videos");

};
