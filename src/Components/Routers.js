import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "../Routes/Home/index";
import Pagenotfound from "../Routes/Pagenotfound";
import Main from "./Main";

function router() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/ongoing" exact component={Home} />
        <Route path="/bid" component={Home} />
        <Route path="/collection" component={Home} />
        <Route path="/support" component={Home} />
        <Route path="/english" component={Home} />
        <Route component={Pagenotfound} />
      </Switch>
    </Router>
  );
}

export default router;
