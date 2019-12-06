// 删除目录

// 以下为删除目录的语法格式：

// fs.rmdir(path, callback)

// 参数使用说明如下：

// path - 文件路径。

// callback - 回调函数，没有参数。

var fs = require("fs");
// 执行前创建一个空的 /tmp/test 目录
console.log("准备删除目录 /tmp/test")

fs.rmdir("./rmdir_demo/",function(err){
  if (err) {
    return console.error(err)
  }

   // 删除了读取、读取不到！！！
  fs.readdir("./rmdir_demo/",function(err, files){
    if (err) {
      return console.error(err)
    }
    files.forEach( function (file){
      console.log(file)
    })
  })
})