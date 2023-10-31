import React, { useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import AdminSignin from "./Components/Auth/AdminSignin";
import AdminRouter from "./Components/Admin/AdminRouter";
// import Signup from "./Components/Signup/Signup";
import VerifyCertificate from "./Components/Admin/Certificate/VerifyCertificate";
import {  getYearWiseAlldetails, createYearWiseRecord, editYearWiseRecord, deleteYearWiseRecord,  getDeptAlldetails, createDeptRecord, editDeptRecord, deleteDeptRecord, getGraphAlldetails, createGraphRecord, editGraphRecord, deleteGraphRecord } from "./constants/backendData";

// context apis
export const AdminContext = React.createContext(false);

function App() {
  // root level element for scoping
  const root = useRef();

  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  // 1) YearWise Context APIs
  const [yearData, setYearData] = useState([]);

  // 2) Graph Context APIs
  const [graphData, setGraphData] = useState([]);

  // Loading bar
  const [progress, setProgress] = useState(0);


  return (
    <>
      {/* <ContextStates> */}
      <div className="App" ref={root} >
        {/* <Translate/> */}
        <AdminContext.Provider value={{ isAdminLoggedIn, setIsAdminLoggedIn, yearData, setYearData, getGraphAlldetails, graphData, setGraphData, getYearWiseAlldetails, createYearWiseRecord, editYearWiseRecord, deleteYearWiseRecord, getGraphAlldetails, createGraphRecord, editGraphRecord, deleteGraphRecord, getDeptAlldetails, createDeptRecord, editDeptRecord, deleteDeptRecord, root,progress,setProgress }}>
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/admin/signin" element={<AdminSignin />} />
            <Route path="/admin/console/*" element={<AdminRouter />} />
            {/*<Route path="/user/:action" element={<Signup />} />*/}
            <Route path="/verifycert/:uniqueid" element={<VerifyCertificate />} />
          </Routes>
        </AdminContext.Provider>
      </div>
      {/* </ContextStates> */}
    </>
  );
}
export default App;
