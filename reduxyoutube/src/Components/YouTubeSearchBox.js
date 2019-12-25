import React, { Component } from "react";
import searchIcon from "../Uploads/searchIcon.png";
import { connect } from "react-redux";
import { Fetch_Videos_API } from "../Redux/Action/YoutubeAPiAction";
export class YouTubeSearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchField: ""
    };
  }

  searchVideo = e => {
    this.setState({ searchField: e.target.value });
    //console.log(e.target.value)
  };

  getVideos = e => {
    e.preventDefault();
    this.props.Fetch_Videos_API(this.state.searchField);
  };
  render() {
    return (
      <div className="input-group mb-3 searchBox">
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          value={this.state.searchField}
          onChange={this.searchVideo}
        />
        <div className="input-group-append SearchDiv">
          <button
            className="btn btn-outline-secondary btnSearch"
            type="button"
            id="button-addon2"
            onClick={this.getVideos}
          >
            <img src={searchIcon} className="btnImg" alt="YouTube" />
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  //console.log(state.videoliist.youtubeVideoList)
  return {
    youtubeVideos: state
  };
};
export default connect(mapStateToProps, { Fetch_Videos_API })(YouTubeSearchBox);