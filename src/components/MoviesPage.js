import React from "react";
import MoviesList from "./MoviesList";
import MovieShow from "./MovieShow";
import { Route, useRouteMatch } from "react-router-dom";

function MoviesPage({ movies }) {
  const match = useRouteMatch()
  
  return (
    <div>
      <MoviesList movies={movies} />
      <Route path={`${match.url}/:movieId`}>
        <MovieShow />
      </Route>
    </div>
  );
}
export default MoviesPage;
