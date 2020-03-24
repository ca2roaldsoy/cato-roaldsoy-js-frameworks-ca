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
import Container from "react-bootstrap/Container";

function NavMenu() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" role="navigation" expand="md">
        <Navbar.Brand>
          <NavLink to="/" exact>
            CRGames
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="./" exact className="nav-link">
              Home
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
          {/*<Route path="/game/:id" component={GameDetail} />*/}
        </Switch>
      </Container>
    </Router>
  );
}

export default NavMenu;
