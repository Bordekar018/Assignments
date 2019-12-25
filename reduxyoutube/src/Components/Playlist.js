import React, { Component } from "react";
import { connect } from "react-redux";
import ParticularVideo from "./particularVideo";

export class Playlist extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (typeof youtubeVideos == "undefined") {
      return null;
    }
    return (
      <React.Fragment>
        <ParticularVideo
          Ukey={this.props.youtubeVideos.id.videoId}
          PassedDataToThisComponent={this.props.youtubeVideos}
        />
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
