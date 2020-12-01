const dbClient = require('../models/dbClient')

const movieController = {
  getAllMovies: async (request, response) => {
    await dbClient.connect()
    const dataArray = await dbClient.db("test").collection("movies").find().toArray()
    response.json(dataArray[0])
    await dbClient.close()
  },
  getThisWeekMovies: async (request, response) => {
    await dbClient.connect()
    const dataArray = await dbClient.db("test").collection("movies_thisweek").find().toArray()
    response.json(dataArray[0])
    await dbClient.close()
  }
}

module.exports = movieController
