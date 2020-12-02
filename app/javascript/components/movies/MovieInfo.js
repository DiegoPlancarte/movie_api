import React, { useState } from 'react';
import useFilmData from '../hooks/useFilmData'
import useRead from '../hooks/useRead'
import useCreate from '../hooks/useCreate'
import useUpdate from '../hooks/useUpdate'
import { Container, Row, Col, Button, Tabs, Tab } from 'react-bootstrap'
import { IconContext } from "react-icons";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import Loading from './Loading';

const MovieInfo = (props) => {

  const [ key, setKey ] = useState('about')
  const [ voted, setVoted ] = useState(false)
  const [ api, setApi, apiLoading, apiError ] = useFilmData(props.match.params.id)
  const [ movies, setMovies, moviesLoading, moviesError ] = useRead(`movies/${props.match.params.id}`)
  const [ createMovie ] = useCreate('movies', props, 'refresh')
  const [ updateMovie ] = useUpdate(`movies/${props.match.params.id}`, props)

  if (apiLoading) {
    return (
      <Loading />
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
    setVoted(true)
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
    setVoted(true)
  }

  return ( 
    <React.Fragment>
    <Container>
      <Row className='my-2 justify-content-between'>
        <Col md={5}>
          <img
            alt={`Poster image for ${api.title}`}
            src={api.poster}
            width='250'
          />
        </Col>
        { voted 
        ? <p className='text-muted'>Your vote has been counted!</p>
        : <Col md={5}>
          <IconContext.Provider value={{ size: "1.5em" }}>
            <div>
              <Button className='vote-button btn-info' onClick={handleUpVote}>
                <Row xs={2}>
                  <Col>
                  {exists ? <>{movie.thumbs_up}</> : <>Great!</>}
                  </Col>
                  <Col>
                  <FaRegThumbsUp/>
                  </Col>
                </Row>
              </Button>
            </div>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: "1.5em" }}>
            <div>
              <Button className='vote-button btn-danger' onClick={handleDownVote}>
                <Row xs={2}>
                  <Col>
                  {exists ? <>{movie.thumbs_down}</> : <>Bad!</>}
                  </Col>
                  <Col>
                  <FaRegThumbsDown/>
                  </Col>
                </Row>
              </Button>
            </div>
          </IconContext.Provider>
        </Col>
        }
      </Row>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className='mb-4'
      >
        <Tab eventKey='about' title='About'>
          <p>Title: {api.title}</p>
          <p>Description: {api.plot}</p>
        </Tab>
        <Tab eventKey='details' title='Film Details'>
          <p>Runtime: {api.length}</p>
          <p>Rating: {api.rating} <em>(from {api.rating_votes} votes on IMDb)</em></p>
          <p>Release Year: {api.year}</p>
        </Tab>
        <Tab eventKey='cast' title='Cast'>
          { api.cast && api.cast.map((v,i)=> {
            return(
              <p key={i}><strong>{v.character}</strong>: {v.actor}</p>
            )
          })}
        </Tab>
        <Tab eventKey='tech' title='Tech Specs'>
          { api.technical_specs && api.technical_specs.map((v,i)=> {
            return(
              <p key={i}>{v.toString()}</p>
            )
          })}
        </Tab>
      </Tabs>
    </Container>
    </React.Fragment>
  );
}

export default MovieInfo