const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/'

MongoClient.connect(url, {useNewUrlParser: true}, (err, db) => {
  if (err) throw err
  console.log('数据库已创建')

  const dbo = db.db('nodeApp')

  // 更新数据
  const whereStr = {"name" : '菜鸟工具'}

  const updateStr = {$set: {"url": 'http://wwww.baidu.com'}}

  dbo.collection('one').updateOne(whereStr, updateStr, (err, res) => {
    if (err) throw err
    console.log("文档更新成功")
    db.close()
  })

})