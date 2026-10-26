// const url = "https://jsonplaceholder.typicode.com/posts"
// let result = fetch(url)
// result.then((response)=>{
//    return response.json()
// })
// .then((data)=>{
//     console.log(data)

// })
// .catch((err)=>{
//     console.log(err)
// })

// fetching api using Async-await
let getPost =async ()=>{
let response =  await fetch("https://jsonplaceholder.typicode.com/posts")
let data = await response.json()
console.log(data)
}
getPost()
