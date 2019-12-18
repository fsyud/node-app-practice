const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/'

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
  if (err) throw err
  const dbo = db.db("test")

  const whereStr = { "name": '菜鸟工具' }  // 查询条件

  dbo.collection('site').find(whereStr).toArray((err, res) => {
    if (err) throw err

    console.log(res)

    db.close()
  })
})

