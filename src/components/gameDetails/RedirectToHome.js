import React from "react";

function RedirectToHome() {
  //Redirect back to home page
  const reDirect = () => {
    setTimeout(() => {
      window.location.href = "/";
    }, 4000);
  };

  return <div>{reDirect()}</div>;
}

export default RedirectToHome;
