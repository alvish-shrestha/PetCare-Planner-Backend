const mongoose = require("mongoose")

const ReminderSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        taskId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Task",
            required: true,
        },
        reminderTime: {
            type: Date,
            required: true,
        },
        method: {
            type: String,
            enum: ["email", "push"],
            default: "push",
        },
        status: {
            type: String,
            enum: ["pending", "sent"],
            default: "pending",
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model(
    "Reminder", ReminderSchema
)
