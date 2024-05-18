const { ObjectId } = require('mongodb')
const { getDataBase } = require('../db/database-connection')

function getCollection() {
    return getDataBase().collection('personagem')
}

function readAll() {
    return getCollection().find().toArray()
}

/**
*@param {string} id
*@returns
*/

function readById(id) {
    return getCollection().findOne({ _id: new ObjectId(id) })
}

function create(newItem) {
    return getCollection().insertOne(newItem)
}

function updateById() {
}
function deleteById() {
}

module.exports = {
    readAll,
    readById,
    create,
    updateById,
    deleteById
}
