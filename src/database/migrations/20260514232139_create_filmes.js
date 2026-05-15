/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {

        return knex.schema.createTable("filmes", (table) => {
    
        table.increments("id").primary()
        table.string("titulos").notNullable()
  

    //relações

    table.integer("genero_id") // fazendo relações entre generos com id

        .unsigned()
    
        .references("id")

        .inTable("generos")




        table.integer("diretores_id") // fazendo relações entre diretores com 

        .unsigned()
    
        .references("id")

        .inTable("diretores")

    
        table.timestamps(true,true)
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
     return knex.schema.dropTable("filmes")
};
