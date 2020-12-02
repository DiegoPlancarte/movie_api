import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//Pages
import TopBar from "./TopBar"
import SearchMovie from "./movies/SearchMovie"
import VotedMovies from "./movies/VotedMovies"
import MovieInfo from "./movies/MovieInfo"
import SearchResults from "./movies/SearchResults"

const App = (props) => {

  const { csrf_token } = props

  return (
    <React.Fragment>
      <Router>
        <TopBar/>

        <Switch>
          <Route exact path='/' render={(props) => <SearchMovie {...props} /> }/>
          <Route path='/allmovies' ><VotedMovies/></Route>
          <Route path = '/movieinfo/:id' render={(props) => <MovieInfo {...props} csrf_token={ csrf_token } /> }/>
          <Route path = '/searchresults' render={(props) => <SearchResults {...props} /> }/>
        </Switch>
      </Router>
    </React.Fragment>
  );
}


export default App