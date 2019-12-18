const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/'

// { type: 1 } 按 type 字段升序
// { type: -1 } 按 type 字段降序

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
  if (err) throw err

  const dbo = db.db("test")

  const mysort = { type: 1 }

  dbo.collection('site').find().sort(mysort).toArray((err, result) => {
    if (err) throw err

    console.log(result)

    db.close()
  })
})