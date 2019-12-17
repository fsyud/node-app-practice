const MongoClient = require('mongodb').MongoClient
const url = "mongodb://localhost:27017/"
 
MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
  if (err) throw err
  const dbo = db.db("test")
  // 删除 test 集合
  dbo.collection("site_3").drop(function(err, delOK) {  // 执行成功 delOK 返回 true，否则返回 false
    if (err) throw err
    if (delOK) console.log("集合已删除")
    db.close()
  })
})