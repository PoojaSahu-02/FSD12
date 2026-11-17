const express = require('express')
const app = express()
require('dotenv').config()
const connectDB = require('./config/db')
const authRouter = require('./routes/authRoute')
const PORT = process.env.PORT

connectDB()

app.use(express.json())
app.use('/api/auth',authRouter)

app.get('/',(req,res)=>{
    res.send("hello world!!")
})
app.listen(PORT,()=>{
console.log(`server is running on port ${PORT}`)
})