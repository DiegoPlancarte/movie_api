import React from 'react';
import useFilmData from '../hooks/useFilmData'
import useRead from '../hooks/useRead'
import useCreate from '../hooks/useCreate'
import useUpdate from '../hooks/useUpdate'
import { Button } from 'react-bootstrap'

const MovieInfo = (props) => {

  const [ api, setApi, apiLoading, apiError ] = useFilmData(props.match.params.id)
  const [ movies, setMovies, moviesLoading, moviesError ] = useRead(`movies/${props.match.params.id}`)
  const [ createMovie ] = useCreate('movies', props, 'allmovies')
  const [ updateMovie ] = useUpdate(`movies/${props.match.params.id}`, props, 'allmovies')

  if (moviesLoading && apiLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  const movie = movies[0]
  const exists = typeof movie === 'undefined' ? false : true

  const handleUpVote = () => {
    if (exists) {
      const number = movie.thumbs_up++
      setMovies(movie => ({...movie, thumbs_up: number}));
      updateMovie(movie)
    } else {
      const values = { title: api.title, thumbs_up: 1, thumbs_down: 0, api_id: api.id }
      createMovie({...values})
    }
  }

  const handleDownVote = () => {
    if (exists) {
      const number = movie.thumbs_down++
      setMovies(movie => ({...movie, thumbs_down: number}));
      updateMovie(movie)
    } else {
      const values = { title: api.title, thumbs_up: 0, thumbs_down: 1, api_id: api.id }
      createMovie({...values})
    }
  }

  return ( 
    <React.Fragment>
    <img 
      src={api.poster}
      width='250'
    />
    <p>{api.title}</p>
    <p>{api.plot}</p>
    <p>{api.length}</p>
    <p>{api.rating}</p>
    <p>{api.year}</p>
    {exists && <p>{movie.thumbs_up}</p>}
    {exists && <p>{movie.thumbs_down}</p>}
    <Button onClick={handleUpVote}>Up Vote</Button>
    <Button onClick={handleDownVote}>Down Vote</Button>
    </React.Fragment>
  );
}

export default MovieInfo