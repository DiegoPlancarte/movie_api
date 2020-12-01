import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//Pages
import VotedMovies from "./movies/VotedMovies"
import MovieInfo from "./movies/MovieInfo"

const App = () => {

  return (
    <React.Fragment>
      <Router>

        <Switch>
          <Route path='/allmovies' ><VotedMovies/></Route>
          <Route path = '/movieinfo/:id' render={(props) => <MovieInfo {...props} /> }/>
        </Switch>
      </Router>
    </React.Fragment>
  );
}


export default App