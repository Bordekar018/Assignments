import React, { Component } from "react";
import Logo from "./Uploads/Logo.png";
import Player from "./Components/Player";
import Playlist from "./Components/Playlist";
import SearchBox from "./Components/SearchBox";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchField: "",
      youtubeVideoList: []
    };
  }
  search = e => {
    this.setState({ searchField: e.target.value });
    //console.log(e.target.value)
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 ">
            <div className="logoMan">
              <img src={Logo} className="img" alt="YouTube" />
              <span className="name">YouTube</span>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 ">
            <SearchBox
              placeholder="Search"
              value={this.state.searchField}
              YoutubeInput={this.search}
            />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 " />
        </div>
        <div className="row other">
          <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
            <p>Hiii</p>
            <Player />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
