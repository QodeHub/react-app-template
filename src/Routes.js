import React from "react";
/**
 * packages
 */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/**
 * others
 */
import Home from "Views/Home";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}
