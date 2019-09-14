import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./HomePage";
import Countries from "./components/Countries";
import Country from "./components/Country";
import { Router } from "@reach/router";
ReactDOM.render(
  <Router>
    <HomePage path="/" />
    <Countries path="/countries" />
    <Country path="/countries/:id" />
  </Router>,
  document.getElementById("root")
);
