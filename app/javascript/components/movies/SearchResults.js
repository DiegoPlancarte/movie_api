import React from 'react';
import useSearch from '../hooks/useSearch'
import { Link } from 'react-router-dom';

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
            <img 
              src={v.image}
              width='250'
            />
            <Link to={`/movieinfo/${v.id}`}>{v.title}</Link>
          </div>
        )
      })}
    </React.Fragment>
  );
}

export default SearchResults;