var fs = require('fs')
var zlib = require('zlib')

// 压缩 input.txt 文件为 input.txt.gz

fs.createReadStream('./../input.txt')  // 创建一个可读流
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('../../input.txt.gz'))  // 创建一个可写流

console.log("文件压缩完成")