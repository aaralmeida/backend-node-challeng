const Client = require('./models/Client')
    // const errors = require('../errors')
    // const mongoose = require('mongoose')
exports.insert = async(requestBody) => {
    let writeResult
    try {
        writeResult = await Client.create(requestBody)
        return writeResult
    } catch (e) {
        throw e
    }
    return writeResult._id
}

exports.update = async(id, requestBody) => {
    let writeResult
    try {
        writeResult = await Client.findByIdAndUpdate(id, requestBody)
    } catch (e) {
        throw e
    }
    return writeResult
}

exports.findOne = async(id) => {
    let client
    try {
        client = await Client.findById(id)
        if (!client)
            return []
    } catch (e) {
        throw e
    }
    return client
}

exports.findAllClientsByProduct = async(products) => { // REFATORAR PARA USAR COMO GROUP POR PRODUTOS
    try {
        const clients = await Client.aggregate([{
                $match: { product_id: { $in: products } }
            }])
            .lookup({ from: 'products', localField: 'product_id', foreignField: '_id', as: 'product' })
        return { clients, error: null }
    } catch (e) {
        return { clients: null, error: 'Falha ao recuperar dados' }
    }
}

exports.delete = async(clientId) => {
    //TODO: Tratar o erro caso o usuário não seja encontrado
    try {
        let deleted = await Client.findByIdAndDelete(clientId)
        return deleted
    } catch (e) {
        throw e
    }
}