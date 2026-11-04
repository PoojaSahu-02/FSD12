const http = require('node:http')
let server = http.createServer((req,res) =>{
res.write("Hello,World!!")
res.end();
})
server.listen(3000,()=>{
console.log("server is running on port 3000")
})

