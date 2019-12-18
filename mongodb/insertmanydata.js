const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/'
 
MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
  if (err) throw err
  const dbo = db.db("test")
  const myobj =  [
    { name: '菜鸟工具', url: 'https://c.runoob.com', type: 'cn'},
    { name: 'Google', url: 'https://www.google.com', type: 'en'},
    { name: 'Facebook', url: 'https://www.google.com', type: 'en'}
  ]
  dbo.collection('site').insertMany(myobj, function(err, res) {
    if (err) throw err
    console.log("插入的文档数量为: " + res.insertedCount)
    db.close()
  })
});