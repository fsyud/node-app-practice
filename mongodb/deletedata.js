const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/'

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
  if (err) throw err
  const dbo = db.db("test")

  const whereStr = { "name": '菜鸟教程' }  // 查询条件

  //  删除一条数据 有多条数据满足时也只删除一条
  //  删除多条数据 deleteMany({type: 'en'})

  dbo.collection('site').deleteOne(whereStr, (err, obj) => {
    if (err) throw err
    
    console.log('文档删除成功')

    db.close()
  })
})