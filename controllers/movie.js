const dbClient = require('../models/dbClient')

const movieController = {
  getAllMovies: async (request, response) => {
    const dataArray = await dbClient.db("test").collection("movies").find().toArray()
    response.json(dataArray)
  },
  getThisWeekMovies: async (request, response) => {
    const dataArray = await dbClient.db("test").collection("movies_thisweek").find().toArray()
    response.json(dataArray)
  }
}

module.exports = movieController
