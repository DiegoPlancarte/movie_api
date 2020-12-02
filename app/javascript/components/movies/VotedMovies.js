import React from 'react';
import { Link } from 'react-router-dom';
import useRead from '../hooks/useRead'
import { Table, Container } from 'react-bootstrap'

import Loading from './Loading'

const VotedMovies = () => {

  const [ movies, setMovies, moviesLoading, moviesError ] = useRead('movies')

  if (moviesLoading) {
    return (
      <Loading />
      )
  }

  return ( 
    <React.Fragment>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Up Votes</th>
              <th>Down Votes</th>
            </tr>
          </thead>
          <tbody>
          { movies.map((v,i) => {
            const num = i + 1
            return (
              <tr key={i} >
                <td>{num}</td>
                <td><Link to={`/movieinfo/${v.api_id}`}>{v.title}</Link></td>
                <td>{v.thumbs_up}</td>
                <td>{v.thumbs_down}</td>
              </tr>
            )
          })}
          </tbody>
        </Table>
      </Container>
    </React.Fragment>
  );
}

export default VotedMovies;