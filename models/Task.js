const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        petId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Pet",
            required: true,
        },
        title: {
            type: String,
            required: true,
            trim: true,
        },
        category: {
            type: String,
            enum: ["Feeding", "Walk", "Grooming", "Medical", "Custom"],
            default: "Custom",
        },
        icon: {
            type: String,
            default: "🐾",
        },
        date: {
            type: Date,
            required: true,
        },
        time: {
            type: String,
        },
        notes: {
            type: String,
            trim: true,
        },
        isCompleted: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model(
    "Task", TaskSchema
)