/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table("filmes", (table) => {

        table.dropColumn("gereno_id")


    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {

    return knex.schema.table("filmes", (table) => {

        table.integer("gereno_id")


    })

  
};
