const express = require('express')
const router = express.Router()
const {createStudent,getAllStudent,getStudent,updateStudent,deleteStudent} = require('../controller/studentController')
router.post('/createstudent',createStudent)
router.get('/getallstudent',getAllStudent)
router.get('/getstudent/:id',getStudent)
router.put('/updatestudent/:id',updateStudent)
router.delete('/deletestudent/:id',deleteStudent)
// http://localhost:3000/student/createstudent
// http://localhost:3000/student/getallstudent
// http://localhost:3000/student/getStudent/id
// http://localhost:3000/student/updateStudent/id
// http://localhost:3000/student/deleteStudent/id
module.exports = router