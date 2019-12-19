import React from "react";
import { connect } from "react-redux";

function Playlist(props) {
  console.log(props);

  return (
    <div key={props.songReducer.id}>
      <h1>
        {/* Playlist:{props.songReducer.map(data => console.log(data))} */}
        Playlist:{props.songReducer.map(data =>
          <div key={data.id}>
            <p>
              {data.name}
              {data.duration}
            </p>
          </div>
        )}
      </h1>
    </div>
  );
}

const mapstateToprops = state => {
  return {
    songReducer: state.songReducer
  };
};

export default connect(mapstateToprops)(Playlist);
