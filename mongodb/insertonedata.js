const MongoClient = require('mongodb').MongoClient

const url = "mongodb://localhost:27017/"

MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
  if(err) throw err

  const dbo = db.db('test')

  const myobj = { name: '菜鸟教程', url: 'www.runoob' }

  dbo.collection('site_3').insertOne(myobj, (err, res) => {
    if (err) throw err
    console.log('文档插入成功')
    db.close()
  })
})