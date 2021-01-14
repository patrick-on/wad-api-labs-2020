import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToWatchListButton from "../components/buttons/addToWatchlist";

const NowPlayingMovieListPage = () => {
  const context = useContext(MoviesContext);
  const nowPlaying = context.nowplaying.filter((m) => {  // New
    return !("watchlist" in m);
  });

  return (
    <PageTemplate
      title="Movies Now Playing"
      movies={nowPlaying}  /* Changed */
      action={(movie) => {
        return <AddToWatchListButton movie={movie} />;
      }}
    />
  );
};

export default NowPlayingMovieListPage;