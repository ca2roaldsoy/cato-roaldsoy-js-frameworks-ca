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

  return (
    <section className="errorMsg">
      <h4>Ups! We couldn't find any information about games</h4>
      <p>You will be redirected back to the home page</p>
      {timer}
    </section>
  );
}

export default RedirectToHome;
