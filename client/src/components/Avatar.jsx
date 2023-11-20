import React from "react";
import "./Card.css";

function Avatar(props) {
  return (
    <img
      className='circle-img'
      src={props.src}
      alt='avatar_img'
    />
  );
}

export default Avatar;
