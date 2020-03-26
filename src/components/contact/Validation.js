import React from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";

// Contact input validation
// if correct display message

function Validation(props) {
  console.log(props);
  if (props.name === undefined) {
    return <Form.Text>Great</Form.Text>;
  } else {
    return props.name && <Form.Text>{props.name.message}</Form.Text>;
  }
}

export default Validation;
