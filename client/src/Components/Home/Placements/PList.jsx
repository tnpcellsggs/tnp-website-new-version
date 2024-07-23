import React, { useEffect, useState, useContext,useCallback } from "react";
import { AdminContext } from "../../../App";
// import {
//   y2021
// } from "./PData.jsx";
import { Container } from "react-bootstrap";

// import Demo from "./Demo"

import YearData from "./YearData";

export default function PList() {
  // using context api to save all the states & use it all over the app
  const deptWiseData = useContext(AdminContext);
  const [deptData, setDeptData] = useState([]);

  const { getDeptAlldetails } = deptWiseData;

  const getDetails = useCallback(async () => {
    // getAlldetails();
    getDeptAlldetails().then((data) => {
        let info = data;
        info = info.sort((a, b) => {
            return (Number.parseInt(a._id.slice(3)) - Number.parseInt(b._id.slice(3)));
        }).reverse();
        setDeptData(info);
        // console.log(info)
    });
}, [getDeptAlldetails, setDeptData]);

useEffect(() => {
    getDetails();
}, []);

  return (
    <>
      <Container
        style={{
          marginTop: "50px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h3 className="text-3xl">
          Department Wise Yearly Placement Record{" "}
          <span style={{ fontSize: "15px" }}>(Click to expand)</span>
        </h3>
        {
          deptData.map((data) => {
            const { _id, departments } = data; // Destructure the _id and departments from each object
            return (

                <div key={_id+Math.random() }>
                  <YearData key={_id} label={"20" + _id.substring(1, 3) + "-" + _id.substring(3)} senddata={departments} />
                  {/* <Demo key={_id} label={"20" + _id.substring(1, 3) + "-" + _id.substring(3)} senddata={departments}/> */}
                </div>

            );
          })
        }


      </Container>
    </>
  );
}
