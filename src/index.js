import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import ReactGA from "react-ga";

const app = (
  <BrowserRouter>  
    <App />
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));
serviceWorker.unregister();
ReactGA.initialize("UA-181274754-2");
ReactGA.pageview(window.location.pathname);
