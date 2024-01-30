import React, { useEffect, useRef, useState, useContext } from "react";
import "./Home.css";
import axios from "axios";
import { AdminContext } from "../../App";
import { Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Navbar from "./Navbar";  // Navbar

import Hero from "./HomePageSection/Hero"; // Home
import EventsPage from "./HomePageSection/Events/Events"; // Home
import TPO from "./HomePageSection/Tpo";    // Tpo
import Director from "./HomePageSection/Director";  // Director
import AboutInfo from "./HomePageSection/AboutInfo"; //About
import Registration from './HomePageSection/Registration';   // Events
import NewsEvents from './HomePageSection/NewsEvents';   // Events
import CompanySlider from "./HomePageSection/CompanySlider"; // PosterSlider

import Departments from "./WhyUS/Departments";  // Departments
import SpecialFacilities from "./WhyUS/SpecialFacilities";  // Special Facilities

import Placements from "./Placements/Placements"; // Placements
import JAF from "./ForRecruiters/JAF";  // Past_Recruiters
import PastRecruiters from "./ForRecruiters/PastRecruiters";  // Past_Recruiters
import RecruitmentProcedures from "./ForRecruiters/RecruitmentProcedures";  // Recruitment_Procedures

import Footer from "./Footer";    // Footer
import { Blank } from "./Blank";
import { OurTeam } from "./OurTeam";    // OurTeam
import { ContactUsPage } from "./ContactUsPage";  // ContactUsPage
import OldTeamTab from "../Home/OldTeams/oldTeamsTab"; //old team

import { CompanyInterest, Researches } from "../../constants/Comps";

import TeamHierarchy from "./WhyUS/TeamHierarchy";

const scrollBehavior = { top: "0", left: "0", behavior: "smooth" };

const Homepage = () => {
  useEffect(() => {
    document.title = "Training & Placement, SGGSIE&T Nanded";
    window.scrollTo(scrollBehavior);

    const fetchEventList = async (req,res) => {
      try {
        let res = await axios.get(
          `${process.env.REACT_APP_REQURL}/admin/events/getall/`
        );
      } catch (err) {
        console.log(err);
      }
    };
    fetchEventList();
  }, []);

  return (
    <>
      {/* 1) Hero section */}
      <Hero />

      {/* 2) Registrations */}
      {/* <Registration /> */}

      {/* 2) News and Events */}
      <NewsEvents />
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
        <Route path="/eventsPage" element={<EventsPage />} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/special_facilities" element={<SpecialFacilities />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/researches" element={<Researches />} />
        <Route path="/past_recruiters" element={<PastRecruiters />} />
        <Route path="/recruitment_procedures" element={<RecruitmentProcedures />} />
        <Route path="/company_interest" element={<CompanyInterest />} />
        <Route path="/jaf_recuriment" element={<JAF />} />
        <Route path="/jaf_internship" element={<Blank />} />
        <Route path="/studentSection" element={<Blank />} />
        <Route path="/ourTeam" element={<OurTeam />} />
        <Route path="/contactus" element={<ContactUsPage />} />
        <Route path="/prevteam" element={<OldTeamTab />} />
        <Route path="/teamHierarchy" element={<TeamHierarchy />} />
        {/* <Route path="/contactus/previous" element={<OldTeams />} /> */}
        {/* <Route path="/gethelp" element={<Help />} /> */}
      </Routes>
      <ToTop buttonStatus={isButtonHidden} scrollFunction={scrollToTop} />
      <Footer />
    </>
  );
}

