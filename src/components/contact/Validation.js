import React from "react";
import PropTypes from "prop-types";

// Contact input validation
// if correct display message
function Validation({ validated }) {
  if (validated) {
    return <small className="verified">verified</small>;
  }

  return null;
}

Validation.propTypes = {
  validated: PropTypes.bool.isRequired
};

export default Validation;
