// skip(): 跳过前面两条数据，读取两条数据
const MongoClient = require('mongodb').MongoClient

const url = "mongodb://localhost:27017/"

MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
  if (err) throw err

  const dbo = db.db('test')

  // 如果要设置指定的返回条数可以使用 limit() 方法，该方法只接受一个参数，指定了返回的条数。
  // 如果要指定跳过的条数，可以使用 skip() 方法
  dbo.collection('site').find().skip(2).limit(3).toArray((err, result) => {
    if (err) throw err
    console.log(result)
    db.close()
  })
})