/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    
    
    return knex.schema.createTable("filmes_generos", (table) => {
    
        table.increments("id").primary() // incrementando o ID como chave primaria
        
  

    //relações

    table.integer("filme_id") 
        .unsigned() // não assinadas
        .references("id") // fazendo referencia com id
        .inTable("filmes") // de onde ? da tabela filmes
        .onDelete("CASCADE") // deleta em cascata. onde excluindo um id de filmes, exclui do genero também




        table.integer("genero_id") 
        .unsigned()
        .references("id")
        .inTable("generos")
        .onDelete("CASCADE")


        table.timestamps(true,true)
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {

   return knex.schema.dropTable("filmes_generos")
  
};
