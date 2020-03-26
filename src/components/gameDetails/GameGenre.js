import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import PropTypes from "prop-types";

function GameGenre({ genres }) {
  return (
    <ListGroup className="mt-5" as="ul">
      Genre
      {genres.map((genre, i) => (
        <ListGroupItem key={i} as="li">
          {genre.name}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}

GameGenre.propTypes = {
  genres: PropTypes.array.isRequired
};

export default GameGenre;
