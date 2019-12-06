// 创建目录

// 以下为创建目录的语法格式：

// fs.mkdir(path[, options], callback)

// 参数使用说明如下：

// path - 文件路径。

// options 参数可以是：

// ----------> recursive - 是否以递归的方式创建目录，默认为 false。

// ----------> mode - 设置目录权限，默认为 0777。

// ----------> callback - 回调函数，没有参数。

var fs = require("fs");
// tmp 目录必须存在
console.log("创建目录 /Node-app/test/");
fs.mkdir("/Node-app/test/",function(err){
   if (err) {
       return console.error(err);
   }
   console.log("目录创建成功。");
});
