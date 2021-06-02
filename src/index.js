import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "react-quill/dist/quill.snow.css"
import "react-quill/dist/quill.bubble.css"
import "react-quill/dist/quill.core.css"
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
<<<<<<< HEAD
import { MuiThemeProvider } from "@material-ui/core";

//themes
import MuiThemes from "./Assets/Themes/MuiThemes";
=======
import { createBrowserHistory } from "history";
>>>>>>> 842f42dadcda240b48348051d882d5513da9ddd7

const history = () => createBrowserHistory();
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MuiThemeProvider theme={MuiThemes}>
        <App />
      </MuiThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
