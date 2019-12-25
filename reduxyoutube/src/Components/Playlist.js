import React, { Component } from "react";
import { connect } from "react-redux";

class Playlist extends Component {
  render() {
    console.log(this.props);
    if (!this.props.youtubeVideos) {
      return null;
    }
    return (
      <div>
        {this.props.youtubeVideos.map(whatEverData =>
          <div className="card text-left" key={whatEverData.id}>
            <img
              className="card-img-top"
              src={whatEverData.snippet}
              alt="Thumb"
            />
            <div className="card-body a">
              <h6 className="card-title">
                {whatEverData.snippet}
              </h6>
              <p className="card-text">
                {whatEverData.snippet}
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state.videoliist.youtubeVideoList);
  return {
    youtubeVideos: state.videoliist.youtubeVideoList
  };
};
export default connect(mapStateToProps)(Playlist);
