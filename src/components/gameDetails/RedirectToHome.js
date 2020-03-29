import React, { useEffect } from "react";
import PropTypes from "prop-types";

function RedirectToHome({ timer, setTimer }) {
  //Redirect back to home page after 4 sec.
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "/";
    }, 4000);

    // countdown timer each second
    const counter = setInterval(() => setTimer(timer - 1), 1000);
    return () => clearInterval(counter);
  }, [timer, setTimer]);

  RedirectToHome.propTypes = {
    timer: PropTypes.number.isRequired,
    setTimer: PropTypes.func.isRequired
  };

  return <div>{timer}</div>;
}

export default RedirectToHome;
