import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";

//import Pages
import Home from "./Pages/Home/HomePage";
import PageNotFound from "./Pages/PageNotFound";
import { Grid, Typography, AppBar, Toolbar } from "@material-ui/core";

//import svg
import BookLover from "./Assets/BookLover.svg";
import './App.css';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {/* <AppBar elevation={0}>
        <Toolbar>
          <Typography component="span">Cicle Baca</Typography>
        </Toolbar>
      </AppBar> */}
      <Grid container justify="space-around">
        <Grid item xs>
          <Typography component="span" variant="h5" color="primary">
            <b>Circle Baca</b>
          </Typography>
          <img src={BookLover} className="home-banner"/>
        </Grid>
      </Grid>
      <Switch location={location}>
        <Route exact path="/" component={Home} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
