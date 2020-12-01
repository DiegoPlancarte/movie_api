import React from 'react';
import useSearch from '../hooks/useSearch'

const SearchResults = (props) => {

  const [ movies, setMovies, moviesLoading, moviesError ] = useSearch(`${props.location.state.title}`)

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
        return(
          <div key={i}>
            <p>{v.title}</p>
            <p>{v.id}</p>
            <p>{v.image}</p>
          </div>
        )
      })}
    </React.Fragment>
  );
}

export default SearchResults;