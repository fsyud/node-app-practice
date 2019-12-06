// 关闭文件

// 以下为异步模式下关闭文件的语法格式：

// fs.close(fd, callback)

// 该方法使用了文件描述符来读取文件。

// 参数使用说明如下：

// fd - 通过 fs.open() 方法返回的文件描述符。

// callback - 回调函数，没有参数。

const fs = require('fs')

const buf = new Buffer.alloc(1024)

console.log("准备打开已存在的文件！")

fs.open('./../input.txt', 'r+', function(err, fd) {
  if (err) {
    return console.error(err)
  }

  console.log('文件打开成功！')
  console.log('准备读取文件！')
  
  fs.read(fd, buf, 0, buf.length, 0, (err, bytes) => {
    if (err) console.log(err)

    // 仅输出读取的字节
    if (bytes > 0) {
      console.log(buf.slice(0, bytes).toString())
    }

    // 关闭文件
    fs.close(fd, err => {
      if (err) console.log(err)
      console.log('文件关闭成功！')
    })
  })
 })