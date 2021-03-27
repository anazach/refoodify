const MongoClient = require('mongodb').MongoClient
var db = null


async function startDatabase() {

  var mongo = await MongoClient.connect(process.env.MONGODB,{ useUnifiedTopology: true })

  return mongo.db('foodify')
}
module.exports = {
  db: db,
  loadDatabase: startDatabase
}