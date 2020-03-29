import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import PropTypes from "prop-types";

function GamePlatform({ platforms }) {
  return (
    <ListGroup className="mt-5 mb-5" as="ul">
      Platform
      {platforms.map((platform, i) => (
        <ListGroupItem key={i} as="li">
          {platform.platform.name}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}

GamePlatform.propTypes = {
  platforms: PropTypes.array.isRequired
};

export default GamePlatform;
