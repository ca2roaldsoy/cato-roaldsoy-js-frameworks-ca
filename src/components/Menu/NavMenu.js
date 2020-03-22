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

function NavMenu() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="./" exact>
          CRGames
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link to="./" exact>
            Home
          </Nav.Link>
          <Nav.Link to="./contact">Contact</Nav.Link>
        </Nav>
      </Navbar>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/game/:id" component={GameDetail} />
      </Switch>
    </Router>
  );
}

export default NavMenu;
