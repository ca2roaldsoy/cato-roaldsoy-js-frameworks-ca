import React from "react";

function Validation({ validated }) {
  if (validated) {
    return <small className="verified">verified</small>;
  }

  return null;
}

export default Validation;
