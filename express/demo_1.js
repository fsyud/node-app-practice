const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

const server = app.listen(8081, () => {
  const host = server.address().address
  const port = server.address().port 

  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})