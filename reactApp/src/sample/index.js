import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import { PublicPage, Movies, Profile, HomePage , UpcomingMovies, TopratedMovies, MoviesNowPlaying} from "./pages";
import LoginPage from "./loginPage";
import SignUpPage from "./signUpPage";
import PrivateRoute from "./privateRoute";
import AuthHeader from "./authHeader";
import AuthProvider from "./authContext";
import MovieProvider from "./moviesContext";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AuthHeader />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/public">Public</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/upcoming">Upcoming Movies</Link>
          </li>
          <li>
            <Link to="/toprated">Toprated Movies</Link>
          </li>
          <li>
            <Link to="/nowplaying">Now Playing Movies</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
        <MovieProvider>
        <Switch>
          <Route path="/public" component={PublicPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />,
          <Route exact path="/" component={HomePage} />
          <PrivateRoute path="/movies" component={Movies} />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/upcoming" component={UpcomingMovies} />
          <PrivateRoute path="/toprated" component={TopratedMovies} />
          <PrivateRoute path="/nowplaying" component={MoviesNowPlaying} />
          <Redirect from="*" to="/" />
        </Switch>
        </MovieProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
