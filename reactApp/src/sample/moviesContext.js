import React, { useState, createContext, useEffect, useReducer } from "react";
import { getMovies, getUpcomingMovies } from "../api/movie-api";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "load":
      return { movies: action.payload.movies, upcoming: [...state.upcoming] };
    case "load-upcoming":
      return { upcoming: action.payload.movies, movies: [...state.movies] };
    default:
      return state;
  }
};

const MoviesContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [], });
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    getMovies().then(movies => {
      console.log(movies);
      dispatch({ type: "load", payload: { movies } });
    });
  }, []);

  useEffect(() => {
    getUpcomingMovies().then(movies => {
      console.log(movies);
      dispatch({ type: "load-upcoming", payload: { movies } });
    });
  }, []);


  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        upcoming: state.upcoming,
        setAuthenticated
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider