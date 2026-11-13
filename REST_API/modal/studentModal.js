const mongoose = require('mongoose')

let studentSchema = mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    contact:Number
})
const student =new mongoose.model('student',studentSchema)
module.exports = student