const [http, fs, url] = [
  require('http'),
  require('fs'),
  require('url')
]

http.createServer((request, response) => {
  const pathname = url.parse(request.url).pathname

  // 输出请求的文件名
  console.log("Request for " + pathname + " received.")

  fs.readFile(pathname.substr(1), (err, data) => {
    console.log(err)
    if (err) {
      // HTTP 状态码：404 ： NOT FOUND
      response.writeHead(404, {'Content-Type': 'text/html'})
    } else {
      // HTTP 状态码：200 ： OK
      response.writeHead(200, {'Content-Type': 'text/html'})

      // 响应文件内容
      response.write(data.toString())
    }

    // 发送相应数据
    response.end()
  })
}).listen(8300)

// 控制台会输出以下信息
console.log('Server running at http://127.0.0.1:8300/');

