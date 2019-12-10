const express = require('express')

const app = express()

const fs = require('fs')

const bodyParser = require('body-parser')

// Multer是一个No.js中间件，用于处理multipart/form-data，
// 它主要用于上传文件。它写在上面。busboy为了达到最高效率
const multer = require('multer')

app.use('/public', express.static('./../public'))

// 创建 application/x-www-form-urlencoded 编码解析
// app.use 用法 (可用中间件)
app.use(bodyParser.urlencoded({ extended: false }))

// dest或存储	文件存放在哪里
// array接受文件的数组，所有的名称fieldname. 
// 可选地错误大于maxCount文件被上传。文件的数组将被存储在req.files .
app.use(multer({ dest: '../tmp' }).array('image'))

app.get('/index_file.htm', function (req, res) {
  res.sendFile( __dirname + "/" + "index_file.htm" )
})

// 获取表单提交的路径
app.post('/file_upload', (req, res) => {
  console.log(req.files[0])  // 上传的文件信息

  // __fileode的全局变量 Node.js中，在任何模块文件内部，
  // 可以使用__filename变量获取当前模块文件的带有完整绝对路径的文件名
  const des_file = __filename + '/' + req.files[0].originalname

  // nodejs  读取文件
  fs.readFile(req.files[0].path, (err, data) => {
    fs.writeFile(des_file, data, (error, response) => {
      if (error) {
        console.log(error)
      } else {
        response = {
          message: 'File uploaded successfully',
          filename: req.files[0].originalname
        }
      }
      console.log( response )
      res.end( JSON.stringify( response ) )
    }) 
  })
})

const server = app.listen(8081, () => {
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})