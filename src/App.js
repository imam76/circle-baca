import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";

//import Pages
import PageNotFound from "./Pages/PageNotFound";

const Page = () => {
  return <p>Hallo selamat datang</p>;
};

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Switch location={location}>
        <Route exact path="/" component={Page} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
