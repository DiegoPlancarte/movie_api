import React from 'react';
import useSearch from '../hooks/useSearch';
import useCreate from '../hooks/useCreate';
import { Link } from 'react-router-dom';
import { Container, Row, Col, CardColumns, Card } from 'react-bootstrap';
import { IconContext } from "react-icons";
import { BiCameraMovie } from 'react-icons/bi';

const SearchResults = (props) => {

  const [ movies, setMovies, moviesLoading, moviesError ] = useSearch(`${props.location.state.title}`)
  const [ createMovie ] = useCreate('movies', props, `/movieinfo/${movies.api_id}`)

  if (moviesLoading) {
    return (
      <Container>
        <div style={{textAlign: "center"}}>
          <div>
            <IconContext.Provider value={{ size: '5em', color: '#3498db'}}>
              <BiCameraMovie/>
            </IconContext.Provider>
            <h1 className="text-info">Loading...</h1>
          </div>
        </div>
      </Container>
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