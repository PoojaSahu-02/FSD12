const path = require('path')
let link = 'https://nodejs.org/docs/latest/api/path.html'
let dirname = path.dirname(link)
console.log(dirname)
console.log(path.basename(link))
console.log(path.extname(link))
console.log(path.format({
  root: '/ignored',
  dir: '/home/user/dir',
  base: 'file.txt',
}))
console.log(path.parse(link))
