import React, { Component } from "react";
import { connect } from "react-redux";

class Playlist extends Component {
  render() {
    //console.log(this.props);
    if (!this.props.youtubeVideos) {
      return null;
    }
    return (
      <div>
        {this.props.youtubeVideos.map(whatEverData =>
          console.log(whatEverData.id.videoId)
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state.videolist.items);
  return {
    youtubeVideos: state.videolist.items
  };
};
export default connect(mapStateToProps)(Playlist);
