const mongoose = require('mongoose')

const ClientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

const Client = mongoose.model('City', ClientSchema)

module.exports = Client