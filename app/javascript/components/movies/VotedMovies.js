import React from 'react';
import useRead from '../hooks/useRead'

const VotedMovies = () => {

  const [ movies, setMovies, moviesLoading, moviesError ] = useRead('movies')

  if (moviesLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  return ( 
    <React.Fragment>
      { movies.map((v,i) => {
        return (
          <div key={i} >
            <p>{v.title}</p>
            <p>{v.thumbs_up}</p>
            <p>{v.thumbs_down}</p>
          </div>
        )
      })}
    </React.Fragment>
  );
}

export default VotedMovies;