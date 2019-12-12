import React from "react";

function Player(props) {
  //console.log(props)
  let { videoOnOnClick } = props;
  console.log(videoOnOnClick);

  if (!videoOnOnClick) {
    return null;
  }
  return (
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${videoOnOnClick.id.videoId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}

export default Player;
