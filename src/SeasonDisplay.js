import React from "react";

function getSeason(lat, month) {
  if (month > 2 && month < 10) {
    return lat < 0 ? "winter" : "summer";
  } else {
    return lat < 0 ? "summer" : "winter";
  }
}

function SeasonDisplay(props) {
  const season = getSeason(props.lat, new Date().getMonth());
  const icon = season === "winter" ? "snowflake" : "sun";

  return (
    <div>
      <i className={`${icon} icon`} />
      <p>{season}</p>
      <i className={`${icon} icon`} />
    </div>
  );
}

export default SeasonDisplay;
