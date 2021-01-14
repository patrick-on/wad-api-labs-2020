import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";    // CHANGED
import FavoriteMoviesPage from './pages/favoritesMoviesPage';      // NEW
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage';
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import upcomingMovies from "./pages/upcomingMovies";
import moviesNowPlayingPage from "./pages/moviesNowPlayingPage";
import topRatedMoviesPage from "./pages/topRatedMoviesPage";
import WatchlistMoviesPage from "./pages/watchlistMoviesPage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="jumbotron">
        <SiteHeader /> 
        <div className="container-fluid">
          <MoviesContextProvider>
            <GenresContextProvider>  
                <Switch>
                  <Route exact path="/reviews/form" component={AddMovieReviewPage} />
                  <Route path="/reviews/:id" component={MovieReviewPage} />
                  <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
                  <Route exact path="/movies/watchlist" component={WatchlistMoviesPage} />
                  <Route exact path="/movies/upcoming" component={upcomingMovies} />
                  <Route exact path="/movies/playing" component={moviesNowPlayingPage} />
                  <Route exact path="/movies/toprated" component={topRatedMoviesPage} />
                  <Route path="/movies/:id" component={MoviePage} />
                  <Route path="/" component={HomePage} />
                  <Redirect from="*" to="/" />
                </Switch> 
            </GenresContextProvider>   
          </MoviesContextProvider>
        </div>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));