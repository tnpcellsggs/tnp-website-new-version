import React, { useEffect, useState } from "react";

import Team2122 from "./Team2122";
import Team2223 from "./Team22_23";

function OldTeams() {
  const [teamYear, setTeamYear] = useState("2122");

  const yearSwitch = (year) => {
    switch (year) {
      case "2223":
        return <Team2223 />;
        // break;

      case "2122":
        return <Team2122 />;
        // break;

      default:
        return <Team2223 />;
        // break;
    }
  };

  useEffect(() => {
    document.title = "Previous Teams | SGGS Training & Placement";
    document.body.backgroundColor ="black";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="oldteam-layout">
        <div className="oldteam-selector">
          <h3>Select year:</h3>
          <div>
            <button
              onClick={() => {
                setTeamYear("2122");
              }}
            >
              AY 21-22
            </button>
            <button
              onClick={() => {
                setTeamYear("2223");
              }}
            >
              AY 22-23
            </button>
          </div>
        </div>
        <div className="oldteam-display">{yearSwitch(teamYear)}</div>
      </div>
    </>
  );
}

export default OldTeams;
