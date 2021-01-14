import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToWatchListButton from "../components/buttons/addToWatchlist";

const TopRatedMovieListPage = () => {
  const context = useContext(MoviesContext);
  const topRated = context.toprated.filter((m) => {  // New
    return !("watchlist" in m);
  });

  return (
    <PageTemplate
      title="Top Rated Movies"
      movies={topRated}  /* Changed */
      action={(movie) => {
        return <AddToWatchListButton movie={movie} />;
      }}
    />
  );
};

export default TopRatedMovieListPage;