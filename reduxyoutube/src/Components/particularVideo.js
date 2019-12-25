import React, { Component } from "react";

export class ParticularVideo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div className="card text-left" key={this.props.Ukey}>
        <img className="card-img-top" />
        {/* src={PassedDataToThisComponent.snippet.thumbnails.high.url} */}
        <div className="card-body a">
          <h6 className="card-title">
            {/* {PassedDataToThisComponent.snippet.title} */}
          </h6>
          <p className="card-text">
            {/* {PassedDataToThisComponent.snippet.channelTitle} */}
          </p>
        </div>
      </div>
    );
  }
}

export default ParticularVideo;
