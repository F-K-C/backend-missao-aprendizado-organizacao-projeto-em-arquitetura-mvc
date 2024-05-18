require('dotenv').config()
const express = require('express')
const { connectToDatabase } = require('./db/database-connection')
const personagemRouter = require('./personagem/personagem.router')
//const { MongoClient, ObjectId } = require('mongodb')

async function main() {

    await connectToDatabase()


    // const collection = db.collection('personagem')
    const app = express()
    app.use(express.json())

    app.get('/', function (req, res) {
        res.send('Hello World')
    })

    app.use('/personagem', personagemRouter)

    /*
    // Endpoint Create [Post]
    app.post('/personagem', async function (req, res) {        
    })


    app.delete('/personagem/:id', async function (req, res) {
        const id = req.params.id

        // if (!lista[id - 1]) {
        //     return res.status(404).send('Item não encontrado.')
        // }

        await collection.deleteOne({ _id: new ObjectId(id) })

        res.send('Item removido com sucesso: ' + id)
    })
    */
    app.listen(3000, function(){
        console.log("Servidor rodando em http://localhost:3000")
    })
}
main()