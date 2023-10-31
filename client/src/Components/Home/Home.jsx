import React, { useEffect, useRef, useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";
import LoadingBar from 'react-top-loading-bar';
import { AdminContext } from "../../App";

import Navbar from "./Navbar";  // Navbar

import Hero from "./HomePageSection/Hero"; // Home
import News_Events from './HomePageSection/NewsEvents';   // Events
import CompanySlider from "./HomePageSection/CompanySlider"; // PosterSlider
import AboutInfo from "./HomePageSection/AboutInfo"; //About
import Director from "./HomePageSection/Director";  // Director
import TPO from "./HomePageSection/Tpo";    // Tpo

import SpecialFacilities from "./WhyUS/SpecialFacilities";  // Special Facilities
import Departments from "./WhyUS/Departments";  // Departments

import Past_Recruiters from "./ForRecruiters/Past_Recruiters";  // Past_Recruiters
import Placements from "./Placements/Placements"; // Placements
import Recruitment_Procedures from "./ForRecruiters/Recruitment_Procedures";  // Recruitment_Procedures

import { OurTeam } from "./OurTeam";    // OurTeam
import { ContactUsPage } from "./ContactUsPage";  // ContactUsPage
import OldTeamTab from "../Home/OldTeams/oldTeamsTab"; //old team
import Footer from "./Footer";    // Footer
import { Blank } from "./Blank";

import { Company_Interest, Researches } from "../../constants/Comps";

const scrollBehavior = { top: "0", left: "0", behavior: "smooth" };

const Homepage = () => {
  useEffect(() => {
    document.title = "Training & Placement, SGGSIE&T Nanded";
    window.scrollTo(scrollBehavior);

    const fetchEventList = async () => {
      try {
        let res = await axios.get(
          `${process.env.REACT_APP_REQURL}/admin/events/getall/`
        );
        // console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchEventList();
  }, []);

  const [showNavExternal3, setShowNavExternal3] = useState(false);
  return (
    <>
      {/* 1) Hero section */}
      <Hero />

      {/* 2) News and Events */}
      <News_Events />
      {/* 3) Past Recuriters Slider */}
      <CompanySlider />

      {/* 4) About Us */}
      {/* <AboutInfo /> */}
      <AboutInfo />
      {/* 5) Director's Message */}
      <Director />

      {/* 6) TPO's message */}
      <TPO />

      {/* Contact redirection */}
    </>
  );
};


const ToTop = (props) => {
  return (
    <div className="totop">
      <button
        className={props.buttonStatus ? "totophidden" : "totopbtn"}
        onClick={props.scrollFunction}
      >
        <FontAwesomeIcon icon={faAnglesUp} />
      </button>
    </div>
  );
};

export default function Home() {
  const scrollUpRef = useRef();
  const [isButtonHidden, setIsButtonHidden] = useState(true);

  useEffect(() => {
    document.title = "Training & Placement Cell, SGGSIE&T Nanded";
    window.scrollTo(scrollBehavior);
    window.addEventListener("scroll", buttonDisplay);
  }, []);

  const buttonDisplay = () => {
    if (window.pageYOffset > 500) {
      setIsButtonHidden(false);
    } else {
      setIsButtonHidden(true);
    }
  };

  const scrollToTop = () => {
    scrollUpRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const ProgressData = useContext(AdminContext);
  const { progress, setProgress } = ProgressData;

  return (
    <>
      {/* <Social /> */}
      <div ref={scrollUpRef}> </div>
      <Navbar />
      <LoadingBar
        color='#f11946'
        progress={progress}
        height={4}
        onLoaderFinished={() => setProgress(0)}
      />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/special_facilities" element={<SpecialFacilities />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/researches" element={<Researches />} />
        <Route path="/past_recruiters" element={<Past_Recruiters />} />
        <Route path="/recruitment_procedures" element={<Recruitment_Procedures />} />
        <Route path="/company_interest" element={<Company_Interest />} />
        <Route path="/jaf_recuriment" element={<Blank />} />
        <Route path="/jaf_internship" element={<Blank />} />
        <Route path="/studentSection" element={<Blank />} />
        <Route path="/ourTeam" element={<OurTeam />} />
        <Route path="/contactus" element={<ContactUsPage />} />
        <Route path="/prevteam" element={<OldTeamTab />} />
        {/* <Route path="/contactus/previous" element={<OldTeams />} /> */}
        {/* <Route path="/gethelp" element={<Help />} /> */}
      </Routes>
      <ToTop buttonStatus={isButtonHidden} scrollFunction={scrollToTop} />
      <Footer />
    </>
  );
}

