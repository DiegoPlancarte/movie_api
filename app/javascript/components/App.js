import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Pages
import VotedMovies from './movies/VotedMovies'

const App = () => {

  return (
    <React.Fragment>
    <VotedMovies />
      <Router>
        <Switch>
          <Route path = '/allmovies' render={ <VotedMovies /> } />
        </Switch>
      </Router>
    </React.Fragment>
  );
}


export default App
