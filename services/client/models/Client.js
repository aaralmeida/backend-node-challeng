const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
    full_name: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        enum: ["M", "F"], // digital, physical
        required: true,
    },
    birthdate: {
        required: true,
        type: Date,
    },
    city: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "City",
    },
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
    },
});

const Client = mongoose.model("Client", ClientSchema);

module.exports = Client;
