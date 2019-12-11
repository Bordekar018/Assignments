import React from "react";
import ParticularVideo from "./ParticularVideo";

function Playlist(props) {
  console.log(props);

  return (
    <React.Fragment>
      {props.VideoList.map(whatEverData =>
        <ParticularVideo
          key={whatEverData.id.videoId}
          PassedDataToThisComponent={whatEverData}
        />
      )}
    </React.Fragment>
  );
}

export default Playlist;
