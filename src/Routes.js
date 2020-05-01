import React from "react";
/**
 * packages
 */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ScrollToTop } from "Components";

/**
 * Route to base components
 */
import Home from "Views/Home";

export default function Routes() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

/**
 * namedRoutes
 *
 * Sometimes it is very import to name your routes if there's
 * a possibility of the routes changing often.
 *
 * This ensures that you have your routes defined at a central
 * place where you can update and have it reflect everywhere it
 * is used
 *
 * Usage
 *
 * import {namedRoutes} from "Routes";
 *
 * namedRoutes.home.index
 * namedRoutes.settings.profile
 * ....
 */
export const namedRoutes = { home: { index: "/" } };
