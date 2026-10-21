
let ul = document.querySelector('.list-Container ul')
let btn = document.querySelector('.btn')
let input = document.querySelector('.input')
btn.addEventListener('click',(e)=>{
    e.preventDefault()
  let li = document.createElement('li')
  let edit = document.createElement('button')
  let del = document.createElement('button')
 edit.textContent = "edit"
 del.textContent = "delete"
 del.addEventListener('click',()=>{
    li.remove()
 })
   li.textContent = input.value
   li.append(edit,del)
   ul.append(li)
   console.log(li)
   input.value = ""


})

