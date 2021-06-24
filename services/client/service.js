const mongoose = require("mongoose");
const Client = require("./models/Client");
const errors = require("../../utils/errors");

exports.insert = async (requestBody) => {
    const checkCityId = mongoose.Types.ObjectId.isValid(requestBody.city);
    if (checkCityId) {
        const client = await Client.create(requestBody);
        return client;
    }
    throw new Error(errors.INVALID_OBJECT_ID);
};

exports.update = async (clientId, requestBody) => {
    const checkClientId = mongoose.Types.ObjectId.isValid(clientId);
    if (checkClientId) {
        const client = await Client.findByIdAndUpdate(clientId, requestBody);
        if (!client) {
            throw new Error(errors.NOT_FOUND);
        }
        return client;
    }
    throw new Error(errors.INVALID_OBJECT_ID);
};

exports.findOne = async (clientId) => {
    const checkClientId = mongoose.Types.ObjectId.isValid(clientId);
    if (checkClientId) {
        const client = await Client.findById(clientId).populate("city");
        if (!client) {
            throw new Error(errors.NOT_FOUND);
        }
        return client;
    }
    throw new Error(errors.INVALID_OBJECT_ID);
};

exports.delete = async (clientId) => {
    const checkClientId = mongoose.Types.ObjectId.isValid(clientId);
    if (checkClientId) {
        const clientDeleted = await Client.findByIdAndDelete(clientId);
        if (!clientDeleted) {
            throw new Error(errors.NOT_FOUND);
        }
        return clientDeleted;
    }
    throw new Error(errors.INVALID_OBJECT_ID);
};
