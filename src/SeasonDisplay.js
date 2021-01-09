import React from "react";
import Loader from "./Loader";

const seasonConfig = {
  summer: {
    text: "lets to the beach",
    iconName: "sun",
  },
  winter: {
    text: "brr its cold",
    iconName: "snowflake",
  },
};

function getSeason(lat, month) {
  if (month > 2 && month < 10) {
    return lat < 0 ? "winter" : "summer";
  } else {
    return lat < 0 ? "summer" : "winter";
  }
}

function SeasonDisplay(props) {
  const season = getSeason(props.lat, new Date().getMonth());
  const seasoninfo = seasonConfig[season];

  return (
    <div>
      <i className={`massive ${seasoninfo.iconName} icon`} />
      <h1>{seasoninfo.text}</h1>
      <i className={`massive ${seasoninfo.iconName} icon`} />
    </div>
  );
}

export default SeasonDisplay;
