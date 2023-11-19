import React from "react";

function Picture() {
  var img_url = "https://picsum.photos/200";

  return (
    <div>
      <img
        alt='Random'
        src={img_url}
      />
    </div>
  );
}

export default Picture;
