import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";

//import Pages
import Home from "./Pages/Home/HomePage";
import PageNotFound from "./Pages/PageNotFound";
import WriteBook from "./Pages/WriteBook/WriteBook";

//material ui
import { Grid, Typography, AppBar, Toolbar } from "@material-ui/core";

//styling
import "./App.css";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <AppBar color="transparent" elevation={0}>
        <Toolbar disableGutters>
          <Grid container justify="center">
            <Grid item xs={12} md={10}>
              <Typography component="span">Circle Baca</Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Switch location={location}>
        <Route exact path="/" component={Home} />
        <Route path="/writebook" component={WriteBook} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
