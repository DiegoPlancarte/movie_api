import React from 'react';
import { Container } from 'react-bootstrap'
import { IconContext } from 'react-icons'
import { BiCameraMovie } from 'react-icons/bi';

const Loading = () => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default Loading;