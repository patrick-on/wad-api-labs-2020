import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToWatchListButton from "../components/buttons/addToWatchlist";

const UpcomingMovieListPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.upcoming.filter((m) => {  // New
    return !("watchlist" in m);
  });

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}  /* Changed */
      action={(movie) => {
        return <AddToWatchListButton movie={movie} />;
      }}
    />
  );
};

export default UpcomingMovieListPage;