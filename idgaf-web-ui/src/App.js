import { LinkContainer } from "react-router-bootstrap";
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import "./App.css";
import Routes from "./Routes";

//let React , {Component} = require('react')
//let Navbar = require("react-bootstrap/lib/Navbar");
//let NavItem = require("react-bootstrap/lib/NavItem");
//let Nav = require ("react-bootstrap/lib/Nav");


class App extends Component {
  render() {
	//if(Auth.isUserAuthenticated() && this.props.location.pathname === '/login') {
    //  return <div/>;
    //}
    return (
	
    <div className="App container">
	  <Navbar collapseOnSelect fixed="top" bg="light" expand="true" variant="light">
          <Navbar.Brand>
            <Link to="/"><img src="./favicon-32x32.png" width="30" height="30" alt="" /></Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav pullRight>
		    <LinkContainer to="/signup">		    
			  <NavItem>Signup</NavItem>
			</LinkContainer>
		    <LinkContainer to="/login">		    
			  <NavItem>Login</NavItem>
			</LinkContainer>
			<LinkContainer to="/about">	
		      <NavItem>About</NavItem>
			</LinkContainer>
			<LinkContainer to="/FAQ">	
              <NavItem>FAQ</NavItem>
			</LinkContainer>
			<LinkContainer to="/contact">	
              <NavItem>Contact</NavItem>
			</LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
    );
  }
}

export default App;