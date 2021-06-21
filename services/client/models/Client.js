const mongoose = require('mongoose')

const ClientSchema = new mongoose.Schema({
    full_name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['M', 'F'], // digital, physical
        required: true
    },
    // birth_date: {
    //     required: true,
    //     type: Date
    // },
    //TODO: IMPLEMENT CITY
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

const Client = mongoose.model('Client', ClientSchema)

module.exports = Client