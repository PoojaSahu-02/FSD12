const express = require('express')
const app = express()
require('dotenv').config()
const connectDB = require('./config/db')
const studentRouter = require('./routes/studentRoutes')
const PORT = process.env.PORT || 5000
connectDB()
app.use(express.json())
//mount
app.use('/student',studentRouter)
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})