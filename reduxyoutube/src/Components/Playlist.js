import React, { Component } from "react";
import { connect } from "react-redux";
import ParticularVideo from "./ParticularVideo";

export class Playlist extends Component {
  render() {
    if (typeof youtubeVideos == "undefined") {
      return null;
    }
    return (
      <React.Fragment>
        {this.props.youtubeVideos.map(whatEverData =>
          <ParticularVideo
            Ukey={whatEverData.id.videoId}
            PassedDataToThisComponent={whatEverData}
          />
        )}
      </React.Fragment>
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
