import React from "react";
import searchIcon from "./Uploads/searchIcon.png";
import Logo from "./Uploads/Logo.png";
import Player from "./Components/Player";
import Playlist from "./Components/Playlist";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 ">
          <div className="logoMan">
            <img src={Logo} className="img" />
            <span className="name">YouTube</span>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 ">
          <div className="input-group mb-3 searchBox">
            <input type="text" className="form-control" placeholder="Search" />
            <div className="input-group-append SearchDiv">
              <button
                className="btn btn-outline-secondary btnSearch"
                type="button"
                id="button-addon2"
              >
                <img src={searchIcon} className="btnImg" />
              </button>
            </div>
          </div>
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

export default App;
