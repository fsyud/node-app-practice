const express = require('express')

const app = express()

const bodyParser = require('body-parser')

// 创建 application/x-www-form-urlencoded 编码解析
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use('/public', express.static('./../public'))

app.get('/index_post.htm', function (req, res) {
  res.sendFile( __dirname + "/" + "index_post.htm" );
})

// req.body  一般用在 post 请求里
app.post('/process_post', urlencodedParser, (req, res) => {
  // 输出 JSON 格式
  var response = {
    "first_name":req.body.first_name,
    "last_name":req.body.last_name
  }

  console.log(response)
  res.end(JSON.stringify(response))
})

const server = app.listen(8081, () => {
  var host = server.address().address
  var port = server.address().port
   
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})