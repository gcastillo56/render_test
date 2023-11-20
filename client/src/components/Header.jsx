import React from "react";
import Picture from "./Picture";

function Header() {
  var name = "Gabriel";
  var lname = "Castillo";
  var today = new Date();

  let greeting;

  const customStyle = {
    color: "navy",
    fontSize: "20px",
    border: "1px solid black",
  };

  /*
  if (num % 2 === 0) {
    customStyle.background = "green";
  } else {
    customStyle.background = "red";
  }*/
  //today.setHours(20);
  var currentTime = today.getHours();
  if (currentTime < 12) {
    greeting = "Good morning";
    customStyle.background = "yellow";
  } else if (currentTime < 18) {
    greeting = "Good afternoon";
    customStyle.background = "aqua";
  } else {
    greeting = "Good night";
    customStyle.background = "blue";
    customStyle.color = "white";
  }
  return (
    <div>
      <h1 style={customStyle}>
        {greeting} {name + " " + lname}
      </h1>
      <Picture />
    </div>
  );
}

export default Header;
