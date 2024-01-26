import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"
dotenv.config()

const app = express()

const port = process.env.PORT || 5000

// Admin routes
import adminRoutes from "./routes/adminRoutes"
app.use("/api/admin", adminRoutes)

// Start mongoose database
// mongoose.connect(process.env.CONNECTION_STRING).then(() => {
//     console.log("hello")
// })

app.listen(port, () => console.log(`Server running on ${port}`))