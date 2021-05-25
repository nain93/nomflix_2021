import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "../Routes/Home/index";
import Pagenotfound from "../Components/Pagenotfound";
import Main from "./Main";
import Tv from "../Routes/TV";
import Search from "../Routes/Search";
import Detail from "../Routes/Detail";

function router() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv" component={Tv} />
        <Route path="/search" component={Search} />
        <Route path="/collection" component={Home} />
        <Route path="/movie/:id" component={Detail} />
        <Route path="/show/:id" component={Detail} />
        <Route component={Pagenotfound} />
      </Switch>
    </Router>
  );
}

export default router;
