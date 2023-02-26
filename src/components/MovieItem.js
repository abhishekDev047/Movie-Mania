


const MovieItem = (props) => {


  return (
    <div className="container">
      <div className="row g-0 ">
        <div className="col-sm-6 col-md-8 box1">
          <div className="card border-success mb-3">
            <div className="card-body text-success">
              <h3 className="card-title">{props.name}</h3>
              <p className="card-text">{props.plot}</p>
              <div className="container px-4 ">
                <div className="row gx-5">
                  <div className="col">
                    <div className="p-3">
                      <p className="items1"> <h5>*Actors: </h5><i>{props.actors}</i></p>
                      <p className="items1"> <h5>Awards: </h5><i>{props.awards}</i></p>
                      <p className="items1"> <h5>BoxOffice collection: </h5><i>{props.earning}</i></p>
                      <p className="items1"> <h5>Country: </h5><i>{props.country}</i></p>
                      <p className="items1"> <h5>Director: </h5><i>{props.director}</i></p>
                      <p className="items1"> <h5>Genre: </h5><i>{props.genre}</i></p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="p-3">
                      <p className="items1"> <h5>Language: </h5><i>{props.lang}</i></p>
                      <p className="items1"> <h5>Released: </h5><i>{props.release}</i></p>
                      <p className="items1"> <h5>Runtime: </h5><i>{props.time}</i></p>
                      <p className="items1"> <h5>Type: </h5><i>{props.type}</i></p>
                      <p className="items1"> <h5>Writer: </h5><i>{props.writer}</i></p>
                      <p className="items1"> <h5>IMDB Ratings: </h5><i>{props.imdb}/10</i></p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="col-6 col-md-4 box2">
          <img src={props.src} className="rounded mx-auto d-block poster" alt={props.name} />
        </div>
      </div>
    </div>
  )
};

export default MovieItem; 