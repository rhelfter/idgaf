import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import About from "./containers/About";
import FAQ from "./containers/FAQ";
import Login from "./containers/Login";
import Contact from "./containers/Contact";
import Signup from "./containers/Signup";
import NotFound from "./containers/NotFound";

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
	<Route path="/signup" exact component={Signup} />
	<Route path="/about" exact component={About} />
	<Route path="/FAQ" exact component={FAQ} />
	<Route path="/login" exact component={Login} />
	<Route path="/contact" exact component={Contact} />
	<Route component={NotFound} />
  </Switch>;