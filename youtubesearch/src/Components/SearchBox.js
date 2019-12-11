import React from "react";
import searchIcon from "../Uploads/searchIcon.png";

function SearchBox(props) {
  //console.log(props.YoutubeInput)
  return (
    <div className="input-group mb-3 searchBox">
      <input
        type="text"
        className="form-control"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.YoutubeInput}
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

export default SearchBox;
