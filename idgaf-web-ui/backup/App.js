import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import "./App.css";
import Routes from "./Routes";

//let React , {Component} = require('react')
//let Navbar = require("react-bootstrap/lib/Navbar");
//let NavItem = require("react-bootstrap/lib/NavItem");
//let Nav = require ("react-bootstrap/lib/Nav");


class App extends Component {
  render() {
    return (
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Brand>
              <Link to="/">Home</Link>
			  <Link to="/about"> About </Link>
			  <Link to="/FAQ"> FAQ </Link>
			  <Link to="/login"> Login </Link>
			  <Link to="/contact"> Contact </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar>
        <Routes />
	  </div>
    );
  }
}

export default App;