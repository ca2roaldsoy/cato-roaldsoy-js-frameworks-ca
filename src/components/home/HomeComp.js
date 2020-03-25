import React from "react";
import PropTypes from "prop-types";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function HomeComp({ id, name, image, rating, release }) {
  return (
    <Col sm={12} md={4} lg={3}>
      <Card>
        <Card.Img variant="top" src={image} alt={name} />
        <Card.Body>
          <Card.Title className="text-center">{name}</Card.Title>
          <ListGroup>
            <ListGroupItem>Rating: {rating}</ListGroupItem>
            <ListGroupItem>Released: {release}</ListGroupItem>
          </ListGroup>
          <Link to={"game/" + id}>
            <Button variant="primary" block>
              More Info
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

HomeComp.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  release: PropTypes.string.isRequired
};

export default HomeComp;
