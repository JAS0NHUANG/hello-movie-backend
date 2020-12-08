const dbClient = require('../models/dbClient')

const movieController = {
  getAllMovies: async (request, response) => {
    try {
      const dataArray = await dbClient.db("test").collection("movies").find().toArray()
      response.json(dataArray)
      console.log("Data Sent")
    } catch (error) {
      response.json({ok: 0, errorMessage: "Server error"})
      console.log(error)
    }
  },
  getMoviesThisweek: async (request, response) => {
    try {
      const dataArray = await dbClient.db("test").collection("movies_thisweek").find().toArray()
      response.json(dataArray)
      console.log("Data Sent")
    } catch (error) {
      response.json({ok: 0, errorMessage: "Server error"})
      console.log(error)
    }
  },
  getMovieGenres: async (request, response) => {
    try {
      const dataArray = await dbClient.db("test").collection("movie_genres").find().toArray()
      response.json(dataArray)
      console.log("Data Sent")
    } catch (error) {
      response.json({ok: 0, errorMessage: "Server error"})
      console.log(error)
    }
  }
}

module.exports = movieController
