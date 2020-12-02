import React from 'react';
import useSearch from '../hooks/useSearch';
import { Link } from 'react-router-dom';
import { Container, CardColumns, Card } from 'react-bootstrap';
import Loading from './Loading';

const SearchResults = (props) => {

  const [ movies, setMovies, moviesLoading, moviesError ] = useSearch(`${props.location.state.title}`)

  if (moviesLoading) {
    return (
      <Loading />
      )
  }

  return (
    <React.Fragment>
      <Container>
        <h1 className="text-primary" id="header">"{props.location.state.title}" Results:</h1>
        <hr/>
        <CardColumns xs={1} md={3}>
          {movies.map((v,i)=> {
            return (
              <Card key={i} border="light" className="shadow">
                <Card.Header><strong>{v.title}</strong></Card.Header>
                <Card.Img
                  alt={`Poster image for ${v.title}`}
                  className='img-fluid'
                  src={v.image}
                  />
                <Card.Body>
                  <Link to={`/movieinfo/${v.id}`} className='btn btn-primary' >More Info</Link>
                </Card.Body>
              </Card>
          )})}
        </CardColumns>
      </Container>
    </React.Fragment>
  );
}

export default SearchResults;