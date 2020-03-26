import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

function GamePlatform({ platforms }) {
  return (
    <ListGroup className="mt-5" as="ul">
      Platform
      {platforms.map((platform, i) => (
        <ListGroupItem key={i} as="li">
          {platform.platform.name}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}

export default GamePlatform;
