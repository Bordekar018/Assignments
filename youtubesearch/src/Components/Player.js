import React from "react";

function Player(props) {
  //console.log(props)
  let { videoOnOnClick } = props;
  //console.log(videoOnOnClick)

  if (!videoOnOnClick) {
    return null;
  }
  return (
    <div className="embed-responsive embed-responsive-21by9">
      <iframe
        className="tubeplayer"
        src={`https://www.youtube.com/embed/${videoOnOnClick.id.videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export default Player;
