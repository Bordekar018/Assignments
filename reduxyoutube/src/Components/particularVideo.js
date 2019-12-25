import React, { Component } from "react";
import { connect } from "react-redux";

class ParticularVideo extends Component {
  render() {
    console.log(this.props);

    return (
      <div className="card text-left" key={this.pc.Ukey}>
        <img
          className="card-img-top"
          src={this.pc.snippet.thumbnails.high.url}
          alt="Thumb"
        />
        <div className="card-body a">
          <h6 className="card-title">
            {this.pc.snippet.title}
          </h6>
          <p className="card-text">
            {this.pc.snippet.channelTitle}
          </p>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownprops) => {
  console.log(state.videoliist.youtubeVideoList);
  return {
    youtubeVideos: state.videoliist.youtubeVideoList,
    pc: ownprops
  };
};
export default connect(mapStateToProps)(ParticularVideo);
