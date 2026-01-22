import React, { useEffect, useState } from "react";

import Team2122 from "./Team2122";
import Team2223 from "./Team22_23";
import Team2324 from "./Team2324";
import Team2425 from "./Team2425";

function OldTeams() {
  const [teamYear, setTeamYear] = useState("2122");

  const yearSwitch = (year) => {
    switch (year) {
      case "2425":
        return <Team2425 runs={1000} />;

      case "2324":
        return <Team2324 runs={1000} />;

      case "2223":
        return <Team2223 runs={1000} />;
      // break;

      case "2122":
        return <Team2122 runs={1000} />;
      // break;

      default:
        return <Team2223 runs={1000} />;
      // break;
    }
  };

  useEffect(() => {
    document.title = "Previous Teams | SGGS Training & Placement";
    document.body.backgroundColor = "black";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="overflow-hidden oldteam-layout">
        <div className="m-4 ">
          <h1 className="text-3xl">Select year:</h1>
          <div>
            <button
              onClick={() => {
                setTeamYear("2122");
              }}
              className="p-2 m-4 font-bold rounded-2xl nav-medium-light-shadows hover:bg-blue-400"
            >
              AY 21-22
            </button>
            <button
              onClick={() => {
                setTeamYear("2223");
              }}
              className="p-2 m-4 font-bold rounded-2xl nav-medium-light-shadows hover:bg-blue-400"
            >
              AY 22-23
            </button>
            <button
              onClick={() => {
                setTeamYear("2324");
              }}
              className="p-2 m-4 font-bold rounded-2xl nav-medium-light-shadows hover:bg-blue-400"
            >
              AY 23-24
            </button>
            <button
              onClick={() => {
                setTeamYear("2425");
              }}
              className="p-2 m-4 font-bold rounded-2xl nav-medium-light-shadows hover:bg-blue-400"
            >
              AY 24-25
            </button>
          </div>
        </div>
        <div className="overflow-hidden oldteam-display">{yearSwitch(teamYear)}</div>
      </div>
    </>
  );
}

export default OldTeams;
