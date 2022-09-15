const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})
const router = require('express').Router()
const db = require('../models')

router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
      res.render('places/index', { places })
    })
    .catch(err => {
      console.log(err) 
      res.render('error404')
    })

    router.post('/', (req, res) => {
        db.Place.create(req.body)
        .then(() => {
            res.redirect('/places')
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
      })
      
      router.get('/:id', (req, res) => {
        db.Place.findById(req.params.id)
        .then(place => {
            res.render('places/show', { place })
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
    })
    
    let placesFormatted = data.places.map((place) => {
        return (
          <div className="col-sm-6">
            <h2>
              <a href={/places/$`{place.id}`}>
                {place.name}
              </a>
            </h2>
            ...
          </div>
        )
      })
      

module.exports.Place = require('./places')})
