const { MongoClient } = require('mongodb')
const { DB_URL } = require('../config')

const dbClient = new MongoClient(DB_URL, { useUnifiedTopology: true } )

async function dbConnect() {
  try {
    await dbClient.connect()
  } 
  catch (error) {
    console.log(error)
  }
}

dbConnect()

module.exports = dbClient 
