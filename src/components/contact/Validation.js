import React from "react";

// Contact input validation 
// if correct display message
function Validation({ validated }) {
  if (validated) {
    return <small className="verified">verified</small>;
  }

  return null;
}

export default Validation;
