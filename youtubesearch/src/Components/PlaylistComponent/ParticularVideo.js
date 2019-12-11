import React from "react";

function ParticularVideo(props) {
  let { PassedDataToThisComponent } = props;

  return (
    <div className="container">
      <div className="card text-left">
        <img
          className="card-img-top"
          src={PassedDataToThisComponent.snippet.thumbnails.high.url}
        />
        <div className="card-body">
          <h4 className="card-title">Title</h4>
          <p className="card-text">Body</p>
        </div>
      </div>
    </div>
  );
}

export default ParticularVideo;
