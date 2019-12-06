// 获取文件信息
// 语法
// 以下为通过异步模式获取文件信息的语法格式：

// fs.stat(path, callback)
const fs = require('fs')

fs.stat('./main_1.js', function (err, stats) {
    console.log(stats.isFile());         //true
})