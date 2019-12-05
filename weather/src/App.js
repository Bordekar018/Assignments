import DigitalClock from "./Components/DigitalClock";
import Weather from "./Components/latlong";

import React from "react";

function App(props) {
  console.log(props);

  return (
    <div className="BackGround">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4 ">
            <Weather />
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 " />
          <div className="col-sm-12 col-md-4 col-lg-4 " />
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4 " />
          <div className="col-sm-12 col-md-4 col-lg-4 " />
          <div className="col-sm-12 col-md-4 col-lg-4" />
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4 " />
          <div className="col-sm-12 col-md-4 col-lg-4 ">
            <div classname="abc">
              <DigitalClock />
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 " />
        </div>
      </div>
    </div>
  );
}

export default App;
