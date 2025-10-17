const express = require("express")
const connectDB = require("./config/db")

const userRoute = require("./routes/userRoutes")

const app = express()

const cors = require("cors");
app.use(cors());

connectDB()

app.use(express.json())

app.use("/api/auth", userRoute)

module.exports = app