import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Todo from "./Todo";
import Cards from "./Cards";

const Routes = () => {
  return (
    <Router>
      <Route path="/" component={Cards} />
      <Route path="/todo" component={Todo} />
    </Router>
  );
};

export default Routes;
