const connection = require('../database/connection')

const testconnection = async ( req, res) => {


try{
   await connection.raw(" SELECT 1+1 AS RESULT")

    return res.json({ message: " CONEXÃO COM BANCO DE DADOS COM SUCESSO "})
     

} catch(error){

    return res.status(500).json({
        message: " ERRO AO CONECTAR AO BANCO DE DADOS",
        error: error
    })
}


}



module.exports = {
 testconnection

}