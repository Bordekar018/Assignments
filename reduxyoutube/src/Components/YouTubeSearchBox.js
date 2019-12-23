import React, { Component } from "react";
import searchIcon from "../Uploads/searchIcon.png";

export class YouTubeSearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      youtubeVideoList: []
    };
  }
  getInput = e => {
    this.setState({ input: e.target.value });
    //console.log(e.target.value)
  };

  render() {
    return (
      <div className="input-group mb-3 searchBox">
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          value={this.state.input}
          onChange={this.getInput}
        />
        <div className="input-group-append SearchDiv">
          <button
            className="btn btn-outline-secondary btnSearch"
            type="button"
            id="button-addon2"
          >
            <img src={searchIcon} className="btnImg" alt="YouTube" />
          </button>
        </div>
      </div>
    );
  }
}

export default YouTubeSearchBox;
