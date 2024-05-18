const { MongoClient } = require('mongodb')

const dbUrl = process.env.DATABASE_URL
const dbName = 'mongodb-arquitetura-mvc'

const client = new MongoClient(dbUrl)

async function connectToDatabase() {
    console.log('Conectando ao banco de dados....')
    await client.connect()
    console.log('Banco de dados conectado com sucesso!')
}

function getDataBase(){
    return client.db(dbName)
}

module.exports = {
    connectToDatabase,
    getDataBase
}