function show (data) {
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  let rating = (
    <h3 className="inactive">
      Not yet rated
    </h3>
  )
  if (data.place.comments.length) {
    let sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.stars
    }, 0)
    let averageRating = Math.round((sumRatings / data.place.comments.length)
    let stars =''
    for (let i = 0; i < averageRating; i++) {
      stars+='*'
    };
    rating = (
      <h3>
        {stars} stars
      </h3>
    )

  
      
    }
    comments = data.place.comments.map(c => {
      return (
        <div className="border col-sm-4">
          ...
        </div>
      )
    })
  }
  return (
      <Def>
        <main>
          <div className="row">
            ...
            <div className="col-sm-6">
              <h1>{ data.place.name }</h1>
              <h2>
                Rating
              </h2>
              {rating}
              <br />
              ...
            </div>
          </div>
        </main>
      </Def>
    )
  

module.exports = show
