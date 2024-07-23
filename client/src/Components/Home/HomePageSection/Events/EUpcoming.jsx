import React from "react";

function EUpcoming(props) {
  return (
    <>
      <div className="upcoming-container">
        <div className="ue-box">
          <div className="ue-img"><img src={props.img}/></div>
          <div className="ue-content">
            <h3>{props.name}</h3>
            <h6>{props.type}</h6>
            <div className="ue-descholder">
              <p>
                {props.desc}
              </p>
            </div>
            <h6>Date: {props.date}</h6>
            <a href={props.link} target="_blank"><button className="ue-btn">Register Now</button></a>
            {/* <h6>00:00 am</h6> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default EUpcoming;
