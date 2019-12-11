import React from "react";

function ParticularVideo(props) {
  let { PassedDataToThisComponent } = props;

  return (
    <div className="card text-left">
      <img
        className="card-img-top"
        src={PassedDataToThisComponent.snippet.thumbnails.high.url}
      />
      <div className="card-body a">
        <h4 className="card-title">
          {PassedDataToThisComponent.snippet.title}
        </h4>
        <p className="card-text">
          {PassedDataToThisComponent.snippet.channelTitle}
        </p>
      </div>
    </div>
  );
}

export default ParticularVideo;
