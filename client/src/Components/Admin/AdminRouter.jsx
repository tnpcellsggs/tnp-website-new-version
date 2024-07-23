import React, { useContext, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import AdminHome from "./AdminHome";
import EventsHome from "./Events/EventsHome";
import CertificateHome from "./Certificate/CertificateHome";
import {YearWise} from "./Placements/YearWise";
import {GraphRecords} from "./Placements/GraphRecords";
import {DeptWise} from "./Placements/DeptWise";
import {News} from "./Placements/News";
import tnpLogo from '../../img/TNP LOGO.png';

import { AdminContext } from "../../App";

export default function AdminRouter() {
  const { isAdminLoggedIn } = useContext(AdminContext);
  useEffect(() => {
    document.title = "Admin Console | TnPCell SGGS";
  }, []);

  return isAdminLoggedIn ? (
    <>
      <AdminNavbar />
      <Routes>
        <Route path="/" element={<AdminHome />} />
        <Route path="/events" element={<EventsHome />} />
        <Route path="/cert" element={<CertificateHome />} />
        <Route path="/yearwise" element={<YearWise />} />
        <Route path="/graphrecords" element={<GraphRecords />} />
        <Route path="/deptwise" element={<DeptWise />} />
        <Route path="/newsSection" element={<News />} />
      </Routes>
      <div className="copyright">
        copyright @2023 SGGSIE&T. All Rights Reserved.
      </div>
    </>
  ) : (
    <div className="w-[90%] mx-auto text-center mt-8" >
      <img src={tnpLogo} alt="tnp_logo" className="mx-auto" />
      <p className="m-4 text-xl font-bold text-center ">Logged Out</p>
      <p className="m-4 text-2xl font-bold text-center text-black "><Link className="hover:text-blue-800" to="/">Click here to go back to HomePage</Link></p>
      <p><Link className="font-bold text-blue-700" to="/admin/signin">Or Sign In</Link></p>
    </div>
  );
}
