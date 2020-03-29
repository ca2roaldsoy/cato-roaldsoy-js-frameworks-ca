import React, { useEffect } from "react";

function RedirectToHome({ timer, setTimer }) {
  //Redirect back to home page after 4 sec.
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "/";
    }, 4000);

    // countdown timer each second
    const counter = timer > 0 && setInterval(() => setTimer(timer - 1), 1000);
    return () => clearInterval(counter);
  }, [timer, setTimer]);

  return <div>{timer}</div>;
}

export default RedirectToHome;
