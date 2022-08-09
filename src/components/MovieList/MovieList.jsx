import React from "react";
import { Grid } from "@mui/material";
import useStyles from "./styles";
import { MovieCard } from "../index";

const MovieList = ({ movies, numberOfMovies, excludeFirst }) => {
  const classes = useStyles();
  const startfrom = excludeFirst ? 1 : 0;
  return (
    <Grid container className={classes.moviesContainer}>
      {movies.results.slice(startfrom, numberOfMovies).map((movie, i) => (
        <MovieCard key={i} movie={movie} i={i} />
      ))}
    </Grid>
  );
};

export default MovieList;
