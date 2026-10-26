// setTimeout
// clearTimeout
// setInterval
// clearInterval
// console.log("start")
// let id = setTimeout(()=>{
//     console.log("Hello, Welcome to asynchronous js")
// },1000)
// console.log(id)
// console.log("end")
// clearTimeout(id)

let id = setInterval(()=>{
    console.log("intervaal")
},1000)
clearInterval(id)