// function greet(){
//     console.log("Hello, Good Afternoon")
// }
// greet()
// greet()
// greet()
// greet()

// let greet = function(){
//     console.log("hello")
// }
// greet()

// default parametrized function or function with default parameters
// function sumOfTwoNumbers (a = 0,b = 0,c = 0,d = 0){
// console.log(a,b,c,d)
// console.log(a+b+c+d)
// console.log(typeof(a+b+c+d))
// }
// sumOfTwoNumbers(10,20)

//function with rest paraameter or rest parametrized function
// function sumOfTwoNumbers (a,b,...c){
// console.log(a,b)
// console.log(a+b)
// console.log(c)
// console.log(typeof(a+b))
//  let sum = 0;
// for(let i = 0;i<c.length;i++){
//     sum = sum+ c[i]
// console.log(i,c[i])
// }
//  console.log(a+b+sum)
// }
// sumOfTwoNumbers(10,20,30,40,50)

//return type function or function with return statement

// function sum(a,b,c){
//     console.log("this is return type funtion")
//     return a+b+c
// }
// console.log(sum(10,20,30))
// let res = sum(10,20,30)
// console.log(res)

// let arr = [11, 22, 33];
// function myFunc(a) {
//   for (let i = 0; i < a.length; i++) {
//     console.log(i, a[i]);
//   }
// }
// myFunc(arr);
// function hello({ name, age }) {
//   // console.log(obj)
//   console.log(`Hello, ${name}`);
//   console.log(`age is ${age}`);
// }
// hello({ name: "john", age: 21 });

// let student = [
//   { "name": "saurabh", age: 23, email: "abc@gmail.com" },
//   { name: "lovejeet", age: 23, email: "lovejeet@gmail.com" },
// ];

// function studentDetails(stu){
//     // console.log(stu)
//      for (let i = 0; i < stu.length; i++) {
//     console.log(`Name is ${stu[i].name} and age is ${stu[i].age} and email is ${stu[i].email}`)
//      }
// }
// studentDetails(student)


//


// function hello(){
//     console.log("This is hello function")
//     // return 1+2
// }
// function greet(callback){
// console.log("this is greet function")
// console.log(callback)
// let res = callback()
// console.log(res)
// }
// greet(function(){
//     console.log("this is hello function")
// })
// // greet(hello())



// function func1(){
//     console.log("this is func1")
// }

// function func2(callback){
// console.log("this is function 2")
// // callback()
//  return callback()
// }
// let res= func2(func1)
// res()
// func2(func1)()


// IIFE(Immediate invoke function)

// let res = (function hello(a){
// console.log("hello",a)
// return 1324567
// })(10)
// console.log(res)


// function myFunc(price,tax){
// console.log(price+tax)
// }
// myFunc(100,0.1)


// let tax = Math.random()
// function myFunc(price,tax){
// console.log(price+tax)
// }
// myFunc(100,tax)


// function outer(){
//     console.log("this is outer function");
//     function inner(){
//         console.log("this is inner function");
//     }
//     inner()
// }
// outer()


// function outer(){
//     console.log("outer function")
//     function inner(){
//         console.log("inner function")
//     }
//     return inner
// }
// let res = outer()
// // console.log(res)
// res()


// let square  = a =>`square of ${a} is = ${a*a}`

// console.log(square(20))


// function outer(){
//     let a = 10;
//     console.log("this is outer function ",a)
//     function inner(){
//         a = 20;
//         console.log("this is inner function ",a)
//     }
//     inner()
// }
// outer()

// if (Math.random() > 0.5) {
//   var x = 1;
// } else {
//   var x = 2;
// }
// console.log(x);

// function testScope() {
//     let x = 10;
//     if (true) {
//         let x = 20;
//         let y = 30;
//         console.log(x); 
//     }
//     console.log(x); 
//     console.log(y); 
// }
// testScope();
// function testHoisting() {
//     console.log(a);
//     console.log(b);
//     var a = 5;
//     let b = 10;
// }
// testHoisting();

const user = { name: "Alice" };
user.name = "Bob";

const arr = [1, 2, 3];
arr.push(4);

try {
    user = { name: "Charlie" };
} catch (err) {
    console.log("Error Caught");
}

console.log(user.name);
console.log(arr.length);



















