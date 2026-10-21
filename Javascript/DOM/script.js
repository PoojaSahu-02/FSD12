// let h1 =  document.getElementById('head1') //element
// console.dir(h1)
// let p = document.getElementsByClassName('para') //HTMLCollection
// console.log(p)
// let p = document.getElementsByTagName('p') //HTMLCollection
// console.log(p)
// let gender = document.getElementsByName('gender') //NodeList
// console.log( gender)
// let head1 = document.querySelector('#head1')
// console.log(head1)
// let para = document.querySelector('.para') //element
// console.log(para)
// let p = document.querySelector('p')
// console.log(p)
// let p = document.querySelectorAll('.container>p') //Nodelist
// console.log(p)


//  let h1 =  document.getElementById('head1') //element
// console.dir(h1)
// console.log(h1.innerHTML)
// console.log(h1.innerText)
// console.log(h1.textContent)
// h1.textContent = "hello"
// console.dir(h1)
// let div = document.querySelector('.container')
// console.log(div.innerHTML)
// div.innerHTML = "<h1> welcome</h1>"
// console.log(div.innerText)
// div.innerText = "hii"
// console.log(div.textContent)

// let img = document.querySelector('img')
// console.log(img)
// let src =img.getAttribute('src')
// console.log(src)
// img.setAttribute("alt","panda")
// img.setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9KdWEWXohoMvpwuWsQwxS6zdHjQeVyeFoKKA4FDjyiKJGDIQ8GI-K-ls&s=10')


// let para = document.querySelector('.para')
// console.log(para.classList)
// para.classList.add("abc")
// console.log(para.classList)
// para.classList.remove('para')
// console.log(para.classList)
// console.log(para.classList.contains('abc'))
// para.classList.toggle('xyz')
// console.log(para.classList)

// let h1 = document.querySelector('#head1')
// console.log(h1)
// h1.style.backgroundColor = "aqua"
// h1.style.color = "red"
// h1.style = "color:red;background-color:aqua;border:2px solid black"

// h1.classList.add("heading")
// console.log(h1)
// h1.style.backgroundColor = "aqua"


// let li = document.createElement('li')
// li.textContent = "item1"
// li.setAttribute('id',"list")
// // li.id = "list"
// li.classList.add("list-items")
// console.log(li)
// let ul = document.querySelector('ul')
// console.log(ul)
// ul.append(li)
// ul.prepend(li)
// ul.after(li)
// ul.before(li)


// let btn = (e)=>{
//     e.preventDefault();
//     // console.log(e)
//     console.log('btn clicke')
// }


let btn = document.querySelector('#btn')
// console.log(btn)
let input = document.querySelector('#name')
btn.addEventListener('click',(e)=>{
    e.preventDefault()
    // console.log("btn clicked")
    console.log(input.value)
})




















