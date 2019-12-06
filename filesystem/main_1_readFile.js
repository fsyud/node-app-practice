const fs = require('fs')

// 异步读取
fs.readFile('./../input.txt', (err, data) => {
  if (err) return console.error(err)
  console.log('异步读取：' + data.toString())
})

// 同步读取 sync 同步
var data = fs.readFileSync('./../input.txt')

console.log('同步读取：' + data.toString())

console.log('程序执行完毕')
