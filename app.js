const express =         require('express')
const cors =            require('cors')
const bodyParser =      require('body-parser')

const movieController = require('./controllers/movie')
const emailController = require('./controllers/email')

const app = express()

const port = 999 

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

app.get('/',                movieController.getAllMovies)
app.get('/movies-thisweek', movieController.getMoviesThisweek)
app.get('/movie-genres',    movieController.getMovieGenres)

app.post('/subscribe',      emailController.subscribeEmail)

app.listen(port, () => {
  console.log("This is Movie Times!")
})

app.options('*', cors())
