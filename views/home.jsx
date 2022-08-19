const React = require('react')
const Def = require('./default')

module.exports = home

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
    <a href="/places">
        <button className="btn-primary">Places Page</button>
    </a>

          </main>
      </Def>
    )
  }
 