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


const listTables = async (req, res) => {

    try {

        const tables = await connection.raw(

            "SELECT name FROM sqlite_master WHERE type ='table' "

        )

        return res.json(tables)


    } catch (error){

        return res.status(500).json(error)
    }


}




module.exports = {
 testconnection,
 listTables

}