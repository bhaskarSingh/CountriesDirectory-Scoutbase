import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./HomePage";
import Countries from "./components/Countries";
import Country from "./components/Country";
import { Router } from "@reach/router";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <HomePage path="/" />
      <Countries path="/countries" />
      <Country path="/countries/:id" />
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);
