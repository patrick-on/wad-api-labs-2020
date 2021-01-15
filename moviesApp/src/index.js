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
import topRatedMoviesPage from "./pages/topRatedMoviesPage";
import WatchlistMoviesPage from "./pages/watchlistMoviesPage";
import AuthProvider from "./pages/authContext";
import AuthHeader from "./pages/authHeader";
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signUpPage";
import PrivateRoute from "./pages/privateRoute";

const App = () => {
  return (
    <BrowserRouter>
    <AuthProvider>
      <div className="jumbotron">
      <AuthHeader />
        <SiteHeader /> 
        <div className="container-fluid">
          <MoviesContextProvider>
            <GenresContextProvider>  
                <Switch>
                  <Route exact path="/reviews/form" component={AddMovieReviewPage} />
                  <Route path="/reviews/:id" component={MovieReviewPage} />
                  <PrivateRoute exact path="/movies/favorites" component={FavoriteMoviesPage} />
                  <PrivateRoute exact path="/movies/watchlist" component={WatchlistMoviesPage} />
                  <PrivateRoute exact path="/movies/upcoming" component={upcomingMovies} />
                  <PrivateRoute exact path="/movies/toprated" component={topRatedMoviesPage} />
                  <Route path="/movies/:id" component={MoviePage} />
                  <Route path="/login" component={LoginPage} />
                  <Route path="/signup" component={SignUpPage} />
                  <PrivateRoute path="/" component={HomePage} />
                  <Redirect from="*" to="/" />
                </Switch> 
            </GenresContextProvider>   
          </MoviesContextProvider>
        </div>
      </div>
      </AuthProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));