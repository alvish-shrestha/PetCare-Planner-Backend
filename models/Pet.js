const mongoose = require("mongoose")

const PetSchema = new mongoose.Schema(
    {
        ownerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        name: {
            type: String,
            required: true,
            trim: true,
        },
        breed: {
            type: String,
            trim: true,
        },
        age: {
            type: Number,
            min: 0,
        },
        photo: {
            type: String,
        },
        healthInfo: {
            allergies: {
                type: String,
            },
            vetContact: {
                type: String,
            }
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model(
    "Pet", PetSchema
)