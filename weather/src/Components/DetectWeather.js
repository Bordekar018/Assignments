import React from "react";

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
    <div>
      <h1>
        Latitude: {props.lat}
      </h1>
      <h1>
        Season: {season}
      </h1>
    </div>
  );
}

export default DetectWeather;
