// promise - pending,fullfil(resolve),reject

//create promise
let result = new Promise((resolve,reject)=>{
console.log("promise created")
})


// consume promise
result.then(()=>{
    console.log("promise resolved")
})
.catch(()=>{
    console.log("promise rejected")
})