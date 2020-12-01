import React, { useState } from 'react';
import { Navbar, Nav } from "react-bootstrap";
import { IconContext } from "react-icons";
import { BiCameraMovie } from 'react-icons/bi';

const TopBar = () => {

  return (
    <React.Fragment>
      <Navbar bg="primary" variant="dark" className='mb-4'>
        <Navbar.Brand href="/">
          <IconContext.Provider value={{ size: '2em'}}>
            <BiCameraMovie/>
          </IconContext.Provider>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/allmovies">Voting Table</Nav.Link>
        </Nav>
      </Navbar>
    </React.Fragment>
  );
}

export default TopBar;