const express = require('express')
const cookieParser = require('cookie-parser')
const util = require('util')

const app = express()

app.use(cookieParser())

app.get('/', function(req, res) {
  console.log("Cookies: " + util.inspect(req.cookies));
})
 
app.listen(8081)
