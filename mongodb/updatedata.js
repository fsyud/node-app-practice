var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/"
 
// 更新一个 updateOne
// 更新多个 updateMany

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err
    var dbo = db.db("test")
    var whereStr = {"name":'菜鸟教程'}  // 查询条件
    var updateStr = {$set: { "url" : "https://www.runoob-update.com" }}
    dbo.collection("site").updateOne(whereStr, updateStr, function(err, res) {
        if (err) throw err
        console.log("文档更新成功")
        db.close()
    })
})