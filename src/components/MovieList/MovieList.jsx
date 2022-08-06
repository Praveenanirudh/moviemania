import React from "react";
import { Grid } from "@mui/material";
import useStyles from "./styles";
import { MovieCard } from "../index";

const MovieList = ({ movies }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.moviesContainer}>
      {movies.results.map((movie, i) => (
        <MovieCard key={i} movie={movie} i={i} />
      ))}
    </Grid>
  );
};

export default MovieList;
