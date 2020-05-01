import React from "react";
import { Switch, Route } from "react-router-dom";

import Index from "./Home/";
import { namedRoutes } from "Routes";

export default function Home() {
  return (
    <Switch>
      <Route exact path={namedRoutes.home.index} component={Index} />
    </Switch>
  );
}
