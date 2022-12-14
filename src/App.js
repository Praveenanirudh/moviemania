import React from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import useStyles from "./components/styles";
import {
  Actors,
  MovieInformation,
  Movies,
  Profile,
  NavBar,
} from "./components/index";
function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route exact path="/movie/:id" element={<MovieInformation />}></Route>

          <Route exact path="/" element={<Movies />}></Route>
          <Route exact path="/profile/:id" element={<Profile />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
