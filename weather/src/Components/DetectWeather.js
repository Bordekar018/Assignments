import React from "react";
import DigitalClock from "./DigitalClock";
function DetectWeather(props) {
  console.log(props);

  function WeatherInfo(lat, month) {
    if (month > 2 && month < 9) {
      console.log(lat);

      return lat > 1 ? "Summer" : "Monsoon";
    } else {
      return lat > 1 ? "Winter" : "Summer";
    }
  }
  let season = WeatherInfo(props.lat, new Date().getMonth());
  return (
    <div className="BackGround">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4 ">
            <h1>
              Latitude: {props.lat}
            </h1>
            <h1>
              Season: {season}
            </h1>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 ">
            <div className="abc">
              <DigitalClock />
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 " />
        </div>
      </div>
    </div>
  );
}

export default DetectWeather;
