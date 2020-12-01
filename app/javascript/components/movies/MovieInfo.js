import React from 'react';
import useFilmData from '../hooks/useFilmDate'

const MovieInfo = (props) => {

  const [ movie, setMovie, movieLoading, movieError ] = useFilmData(props.match.params.id)

  if (movieLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  return ( 
    <React.Fragment>
    <p>{movie.title}</p>
    <p>{movie.plot}</p>
    <p>{movie.length}</p>
    <p>{movie.rating}</p>
    <p>{movie.year}</p>
    <p>{movie.poster}</p>
    </React.Fragment>
  );
}

export default MovieInfo