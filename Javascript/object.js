let pen = {
    "brand":"LG",
    'color':"Black",
    price:2000
}
// console.log(pen,typeof(pen))
// console.log(pen.color)
// console.log(pen."brand name")
// [] - subscript operator
// console.log(pen["brand name"])

// let obj = new Object()
// obj.name = "john"
// console.log(obj)

// let key1 = prompt("Enter key 1")
// let value1 = prompt("Enter value 1")
// let key2 = prompt("Enter key 2")
// let value2 = prompt("Enter value 2")

// console.log(key1,value1)
// obj[key1] = value1
// console.log(obj)

// let user = {
//     [key1] : value1,
//     [key2] : value2
// }
// console.log(user)

// for(let i in pen){
//     console.log(i,pen[i])
// }

// for(let key of Object.keys(pen)){
//     console.log(key,pen[key])
// }

//  object destructuring (ES6)
let {brand:a,color,price} = pen
console.log(a)
console.log(color)
console.log(price)







