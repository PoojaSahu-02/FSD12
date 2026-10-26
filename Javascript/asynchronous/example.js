console.log("Start")
setTimeout(()=>{
    console.log("inside timer")
},0)
new Promise((resolve, reject) => {
  if(true){
    resolve("promise resolved")
  }
  else{
    reject("promise reject")
  }
})
.then((data)=>{
console.log(data)
})
.catch((err)=>{
    console.log(err)
})
console.log("end")
