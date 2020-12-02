import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap'
import { Redirect } from 'react-router-dom';
import { Container } from 'react-bootstrap'

const SearchMovie = () => {

  const [ title, setTitle ] = useState({})
  const [ redirect, setRedirect ] = useState(false)

  const handleSubmit = (event) => {
    if(event) {
      event.preventDefault();
    }
    setRedirect(!redirect)
  }

  const handleInputChange = (event) => {
    event.persist();
    setTitle({[event.target.name]: event.target.value});
  }

  return ( 
    <React.Fragment>
      <Container>
        <Form>
          <Form.Group controlId="title">
            <Form.Label >Search Movies</Form.Label>
            <Form.Control
              type="text" 
              name="title" 
              value={ title.title || '' } 
              onChange={ handleInputChange } 
              placeholder="Enter title" />
          </Form.Group>
          <Button type='submit' onClick={handleSubmit}>Search</Button>
          { redirect && (
            <Redirect to={{ 
              pathname: '/searchresults',
              state: {title: title.title}
            }} />
          )}
        </Form>
        <p className='text-center font-italic'>Powered by the IMDb API</p>
      </Container>
    </React.Fragment>
  );
}

export default SearchMovie;