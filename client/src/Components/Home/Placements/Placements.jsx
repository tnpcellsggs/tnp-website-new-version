import React, { useState, useEffect, useContext } from "react";

import { AdminContext } from "../../../App";
import PGraph from "./PGraph";
import PList from "./PList";
// import { yearwiseSummary } from "./PData";

// import Graph from "../Graph";
// import Recruiters from "../Recruiters";

const PTable = () => {

  // using context api to save all the states & use it all over the app
  const graphContext = useContext(AdminContext);
  const [yearTempData, setTempData] = useState([]);

  const { getYearWiseAlldetails } = graphContext;
  useEffect(() => {
    // getAlldetails();
    getYearWiseAlldetails().then((data) => setTempData(data));
  }, []);

  return (
    <div className="p-table">
      <table>
      <caption className="caption-top">
        Year Wise Placement Record
      </caption>
        <thead>
          <tr>
            <th>Year</th>
            <th>BTech on roll</th>
            <th>BTech placed</th>
            <th>Average Package (LPA)</th>
            <th>Package Range (LPA)</th>
          </tr>
        </thead>
        <tbody>
          {/* {yearwiseSummary.map((i) => {
            return (
              <tr key={i["Year"]}>
                <td>{i["Year"]}</td>
                <td>{i["BTech on roll"]}</td>
                <td>{i["BTech placed"]}</td>
                <td>{i["Average Package (LPA)"]}</td>
                <td>{i["Package Range (LPA)"]}</td>
              </tr>
            );
          })} */}
          {yearTempData.reverse().map((item) => {
            return (
              <tr key={item.Year}>
                <td>{item.Year}</td>
                <td>{item.BTechOnRoll}</td>
                <td>{item.BTechPlaced}</td>
                <td>{item.AveragePackage}</td>
                <td>{item.PackageRange}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default function Placements() {
  useEffect(() => {
    document.title = "Placements | SGGS Training & Placement";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <h1 className="text-3xl homepage-headings">Placement Records</h1>
      <PGraph />
      <PTable />
      <PList />
      {/* <Graph /> */}
      {/* <Recruiters /> */}
    </>
  );
}
