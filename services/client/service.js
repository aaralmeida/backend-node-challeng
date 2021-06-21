const Client = require('./models/Client')
const errors = require('../../utils/errors')
const mongoose = require('mongoose')

exports.insert = async(requestBody) => {
    try {
        let checkCityId = mongoose.Types.ObjectId.isValid(requestBody.city)
        if (checkCityId) {
            let client = await Client.create(requestBody)
            return client
        }
        throw new Error(errors.INVALID_OBJECT_ID)
    } catch (e) {
        throw e
    }
}

exports.update = async(clientId, requestBody) => {
    try {
        let checkClientId = mongoose.Types.ObjectId.isValid(clientId)
        if (checkClientId) {
            let client = await Client.findByIdAndUpdate(clientId, requestBody)
            if (!client) {
                throw new Error(errors.NOT_FOUND)
            }
            return client
        }
        throw new Error(errors.INVALID_OBJECT_ID)
    } catch (e) {
        throw e
    }
}

exports.findOne = async(clientId) => {
    try {
        let checkClientId = mongoose.Types.ObjectId.isValid(clientId)
        if (checkClientId) {
            let client = await Client.findById(clientId).populate('city');
            if (!client) {
                throw new Error(errors.NOT_FOUND)
            }
            return client
        }
        throw new Error(errors.INVALID_OBJECT_ID)
    } catch (e) {
        throw e
    }
}


exports.delete = async(clientId) => {
    try {
        let checkClientId = mongoose.Types.ObjectId.isValid(clientId)
        if (checkClientId) {
            let clientDeleted = await Client.findByIdAndDelete(clientId)
            if (!clientDeleted) {
                throw new Error(errors.NOT_FOUND)
            }
            return clientDeleted
        }
        throw new Error(errors.INVALID_OBJECT_ID)
    } catch (e) {
        throw e
    }
}