import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Home from "../home/Home";
import Contact from "../contact/Contact";

function NavMenu() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="./" exact="true">
          CRGames
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="./" exact>
              Home
            </NavLink>
            <NavLink to="./contact">Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
        {/*<Route path="/game/:id" component={GameDetail} />*/}
      </Switch>
    </Router>
  );
}

export default NavMenu;
