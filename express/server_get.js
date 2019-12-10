const express = require('express')

const app = express()

app.use('/public', express.static('./../public'))

app.get('/index_get.htm', (req, res) => {
  res.sendFile( __dirname + "/" + "index_get.htm" );
})

app.get('/process_get', (req, res) => {
  // 输出 JSON 格式
  var response = {
    "first_name":req.query.first_name,
    "last_name":req.query.last_name
  }
  console.log(response)
  res.end(JSON.stringify(response))
})

const server = app.listen(8081, () => {
  var host = server.address().address
  var port = server.address().port
   
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})
