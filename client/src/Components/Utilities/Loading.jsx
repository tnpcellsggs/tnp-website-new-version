import React from "react";
import "./Utilities.css";

function Loading(props) {
  return (
    <div className="loading-container">
      <div
        className="loading-spinner"
        style={{
          borderWidth: `${props.width}px`,
          width: `${props.size}px`,
          height: `${props.size}px`,
          animationDuration: `${props.speed}s`,
          border: '12px solid #fd0d0d',
          borderTop: '12px solid transparent',
          borderRadius: '50%'
        }}
      ></div>
    </div >
  );
}

export default Loading;
