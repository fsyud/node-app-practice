// Node.js GET/POST请求

// 在很多场景中，我们的服务器都需要跟用户的浏览器打交道，如表单提交。

// 表单提交到服务器一般都使用 GET/POST 请求。

// 本章节我们将为大家介绍 Node.js GET/POST请求。

// charset 字符集；字元集   charset=utf-8 可解决字符乱码问题

const http = require('http')

const url = require('url')

const util = require('util')

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'})

  // 解析 url 参数
  var params = url.parse(req.url, true).query

  res.write('网站名：' +  params.name)

  res.write('\n')

  res.write('网站 URL：' + params.url)

  res.end()
}).listen(3000)