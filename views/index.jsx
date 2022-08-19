const React = require('react')
const Def = require('./default')

function index () {}

module.exports = index

function index () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
          </main>
      </Def>
    )
  }
