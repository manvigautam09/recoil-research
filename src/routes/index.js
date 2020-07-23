import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Todo from "./Todo";
import Cards from "./Cards";

const Routes = () => {
  return (
    <Router>
      <RecoilRoot>
        <Route path="/" component={Cards} />
        <Route path="/todo" component={Todo} />
      </RecoilRoot>
    </Router>
  );
};

export default Routes;
