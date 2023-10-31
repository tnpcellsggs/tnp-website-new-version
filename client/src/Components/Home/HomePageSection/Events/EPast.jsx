import React from "react";

function EPast(props) {
  return (
    <div
      className={
        props.type === "drive" ? "past-container pe-drive" : "past-container"
      }
    >
      <div className="pe-type">{props.type}</div>
      <div className="pe-box">
        <div className="pe-name">{props.name}</div>
        <div className="pe-det">{props.org}</div>
        <div className="pe-det">{props.date}</div>
      </div>
    </div>
  );
}

export default EPast;
