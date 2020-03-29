import React from "react";

function RedirectToHome() {
  //Redirect back to home page after 4 sec.
  const reDirect = () => {
    setTimeout(() => {
      window.location.href = "/";
    }, 4000);
  };

  return <div>{reDirect()}</div>;
}

export default RedirectToHome;
