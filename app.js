const express =         require('express')
const movieController = require('./controllers/movie')
const cors =            require('cors')

const app = express()

const port = 999 

app.use(cors())

app.get('/',                movieController.getAllMovies)
app.get('/movies-thisweek', movieController.getMoviesThisweek)
app.get('/movie-genres',    movieController.getMovieGenres)

app.listen(port, () => {
  console.log("This is Movie Times!")
})

app.options('*', cors())
