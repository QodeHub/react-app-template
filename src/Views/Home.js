import React from "react";
import { Switch, Route } from "react-router-dom";

import Index from "./Home/";

export default function Home() {
  return (
    <Switch>
      <Route exact path="/" component={Index} />
    </Switch>
  );
}
