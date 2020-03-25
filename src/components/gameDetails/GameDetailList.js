import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

function GameDetailList({ genres, platforms }) {
  console.log(genres, platforms);
  return (
    <>
      <ListGroup className="mt-5" as="ul">
        Genre
        {genres.map((genre, i) => (
          <ListGroupItem key={i} as="li">
            {genre.name}
          </ListGroupItem>
        ))}
      </ListGroup>
      <ListGroup className="mt-5" as="ul">
        Platform
        {platforms.map((platform, i) => (
          <ListGroupItem key={i} as="li">
            {platform.platform.name}
          </ListGroupItem>
        ))}
      </ListGroup>
    </>
  );
}

export default GameDetailList;
