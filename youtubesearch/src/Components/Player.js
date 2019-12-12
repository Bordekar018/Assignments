import React from "react";

function Player(props) {
  console.log(props);

  return (
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/Z_-lSJg52NU"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}

export default Player;
