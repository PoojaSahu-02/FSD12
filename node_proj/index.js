const express = require('express')
const app = express()
const path  = require('path')
// app.use(express.static('public'))
app.use(express.static(path.join(__dirname, 'public','HTML')));
let middleware1 = (req,res,next)=>{
    console.log("this is middeware 1 ")
    next()
}
let middleware2 = (req,res,next)=>{
    console.log("this is middeware 2 ")
    next()
}
// app.use(middleware1,middleware2)
app.get('/',(req,res)=>{
    // res.sendFile(path.join(__dirname,'public','HTML','index.html'))
    res.render('index')  
})

app.get('/images',(req,res)=>{
    res.sendFile('image.png')
})
let mid = [middleware1,middleware2]
app.get('/home',mid,(req,res)=>{
    // console.log(res)
    res.send("Home page")
})
app.get('/about',(req,res)=>{
res.send("About page")
})
//route params
app.get('/user/:username',(req,res)=>{
    // console.log(req)
    res.send(`Hello ${req.params.username}`)
})
//query params
app.get('/product',(req,res)=>{
    // console.log(req)
    res.send(`product name is ${req.query.prodname} and price is ${req.query.price}`)
})

app.post('/post',(req,res)=>{
    res.send("this is")
})
app.listen(3000,()=>{
    console.log(`server is running on port 3000`)
})

