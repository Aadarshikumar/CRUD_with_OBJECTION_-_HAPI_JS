/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("hapi_table", table => {
        table.increments("id").primary(),
            table.string("name"),
            table.string("email").unique(),
            table.string("password")
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    knex.schema.dropTable('hapi_table')
};
