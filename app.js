const express =         require('express')
const movieController = require('./controllers/movie')

const app = express()

const port = 888

app.get('/',          movieController.getAllMovies)
app.get('/this-week', movieController.getThisWeekMovies)

app.listen(port, () => {
  console.log("This is Movie Times!")
})
