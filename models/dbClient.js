const { MongoClient } = require('mongodb')
const { DB_URL } = require('../config')

const dbClient = new MongoClient(DB_URL, { useUnifiedTopology: true } )

module.exports = dbClient 
