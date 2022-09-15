

//Modules and Globals
require('dotenv').config()

//Initialize express app variable 
const express = require('express')
const methodOverride = require('method-override')
const app = express()

//Defines the JSX view engine. These are the Express Settings 
//app.set('views', _dirname + '/views)
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

//Controllers & Routes
app.use('/places', require('./controllers/places'))

//HomePage route
app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})

let placesFormatted = data.places.map((place, index) => {
    return (
      <div className="col-sm-6">
        <h2>
          <a href={`/places/${index}`} >
            {place.name}
          </a>
        </h2>
        <p>className="text-center" 
          {place.cuisines}
        </p>
        <img src={place.pic} alt={place.name} />
        <p className="text-center">
          Located in {place.city}, {place.state}
        </p>
      </div>
    )
  })
  router.delete('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
      res.render('error404')
    }
    else if (!places[id]) {
      res.render('error404')
    }
    else {
      places.splice(id, 1)
      res.redirect('/places')
    }
  })
  
  
  
// Listen for Connections
app.listen(process.env.PORT)
//Listen for connections 



// res.status(404).render('error404')