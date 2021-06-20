const Client = require('./models/Client')
// const errors = require('../errors')
// const mongoose = require('mongoose')
exports.insert = async (requestBody) => {
  let writeResult
  try {
    writeResult = await Client.create(requestBody)
  } catch (e) {
    throw e
  }
  return writeResult._id
}

exports.update = async (id, requestBody) => {
  let writeResult
  try {
    writeResult = await Client.findOneAndUpdate({ _id: id }, requestBody)
  } catch (e) {
    throw e
  }
  return writeResult._id
}

exports.findOne = async (id) => {
  let client
  try {
    client = await Client.findById(id)
  } catch (e) {
    throw e
  }
  return client
}

exports.findAllClientsByProduct = async (products) => { // REFATORAR PARA USAR COMO GROUP POR PRODUTOS
  try {
    const clients = await Client.aggregate([
      {
        $match: { product_id: { $in: products } }
      }])
      .lookup({ from: 'products', localField: 'product_id', foreignField: '_id', as: 'product' })
    return { clients, error: null }
  } catch (e) {
    return { clients: null, error: 'Falha ao recuperar dados' }
  }
}
