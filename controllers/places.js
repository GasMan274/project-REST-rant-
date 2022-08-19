const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('GET /places')
})

module.exports = router

// GET /places
//app.get('/', (req, res) => {
//    res.render('places/index')
//  })

  // GET /places



  
