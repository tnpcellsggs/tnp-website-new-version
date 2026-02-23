import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PosterSlider from './PosterSlider';
import { AdminContext } from "../../../App";
import Stats from "../../../img/Gallary/statistics.jpg";
import Summary from "../../../img/Gallary/summary_report_icon.jpg";
import SectionWrapper from "../../../Higher_Order_Components/SectionWrapper";

const Hero = () => {

  const placementContext = useContext(AdminContext);
  const [yearData, setTempData] = useState([]);

  const { getYearWiseAlldetails } = placementContext;

  useEffect(() => {
    getYearWiseAlldetails().then((data) => setTempData(data));
  }, []);

  return (
    <>
      <div className="flex flex-col items-center w-full sm:flex-row">

        {/* LEFT SECTION */}
        <div className="w-full sm:w-[60%] flex flex-col p-4">

          <div>
            <h1 className="my-2 text-lg text-gray-700">Welcome To</h1>
            <h2 className="my-2 text-3xl">
              Training & Placement Cell <br />
              Shri Guru Gobind Singhji Institute Of
              Engineering & Technology
            </h2>
            <p>
              “Our Training and Placement Cell Is For The Students And By The Students.”
            </p>
          </div>

<<<<<<< HEAD
          <div className="hidden w-full my-8 border-2 rounded-md sm:block nav-light-shadows" >
            {/* Headers Section */}
            <div className="grid grid-cols-2 h-full">
              <div className="m-3 sm:m-4 min-h-[140px] md:min-h-[120px] lg:min-h-[110px] flex flex-col justify-center">
                <h3 className="m-2 text-lg md:text-xl lg:text-2xl leading-tight">Recruiters</h3>
                <h4 className="m-2 text-lg md:text-xl lg:text-2xl leading-tight">Interested In Recruiting From SGGSIE&T</h4>
              </div>
              <div className="m-3 sm:m-4 min-h-[140px] md:min-h-[120px] lg:min-h-[110px] flex flex-col justify-center">
                <h3 className="m-2 text-lg md:text-xl lg:text-2xl leading-tight">Our Brochures</h3>
                <h3 className="m-2 text-lg md:text-xl lg:text-2xl leading-tight">See Flyer & Brochures Of Our Institute</h3>
              </div>
            </div>
            {/* Buttons Grid - 2 rows x 2 columns */}
            <div className="grid grid-cols-2 grid-rows-2 gap-3 p-4 mx-2">
              {/* Row 1 */}
              <Link to='/jaf_recuriment' className="font-bold">
                <p className="py-3 px-2 text-sm md:text-base lg:text-lg text-center text-black bg-orange-300 border-2 rounded-xl hover:cursor-pointer hover:bg-orange-400 transition-colors h-full flex items-center justify-center leading-tight">Job Announcement Form</p>
              </Link>
              <a target='_blank' rel="noreferrer" href='https://drive.google.com/file/d/1D4EMmV2FgA1rFwRR7O0H9cc10ArttnCK/view?usp=sharing' className="font-bold">
                <p className="py-3 px-2 text-sm md:text-base lg:text-lg text-center text-black bg-orange-300 border-2 rounded-xl hover:cursor-pointer hover:bg-orange-400 transition-colors h-full flex items-center justify-center leading-tight">Placement Brochure</p>
              </a>
              {/* Row 2 */}
              <Link to='/contactus' className="font-bold">
                <p className="py-3 px-2 text-sm md:text-base lg:text-lg text-center text-black bg-orange-300 border-2 rounded-xl hover:cursor-pointer hover:bg-orange-400 transition-colors h-full flex items-center justify-center leading-tight">Contact Us</p>
              </Link>
              <a target='_blank' rel="noreferrer" href='https://drive.google.com/file/d/1syO4OcmsHiDNOwZxo-6lQAiG18bzIkRd/view?usp=sharing' className="font-bold">
                <p className="py-3 px-2 text-sm md:text-base lg:text-lg text-center text-black bg-orange-300 border-2 rounded-xl hover:cursor-pointer hover:bg-orange-400 transition-colors h-full flex items-center justify-center leading-tight">SGGSIE&T TPO Flyer</p>
              </a>
=======
          {/* RECRUITER + BROCHURE SECTION (FIXED ALIGNMENT) */}
          <div className="w-full my-8 p-6 border-2 rounded-2xl nav-light-shadows">

            <h3 className="text-xl sm:text-2xl font-semibold text-center mb-8">
              Recruiters & Brochures
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              <Link to="/jaf_recuriment">
                <div className="h-24 flex items-center justify-center text-center font-bold bg-orange-300 border rounded-xl shadow-sm">
                  JAF Form
                </div>
              </Link>

              <a
                target="_blank"
                rel="noreferrer"
                href="https://drive.google.com/file/d/1D4EMmV2FgA1rFwRR7O0H9cc10ArttnCK/view?usp=sharing"
              >
                <div className="h-24 flex items-center justify-center text-center font-bold bg-orange-300 border rounded-xl shadow-sm">
                  Placement Brochure
                </div>
              </a>

              <Link to="/contactus">
                <div className="h-24 flex items-center justify-center text-center font-bold bg-orange-300 border rounded-xl shadow-sm">
                  Contact Us
                </div>
              </Link>

              <a
                target="_blank"
                rel="noreferrer"
                href="https://drive.google.com/file/d/1syO4OcmsHiDNOwZxo-6lQAiG18bzIkRd/view?usp=sharing"
              >
                <div className="h-24 flex items-center justify-center text-center font-bold bg-orange-300 border rounded-xl shadow-sm">
                  SGGSIE&T TPO Flyer
                </div>
              </a>

>>>>>>> 71479bdf957be16faa731e8d6b53d93435191c51
            </div>
          </div>

        </div>

        {/* RIGHT SECTION */}
        <div className="w-[95%] sm:w-[40%] nav-light-shadows m-4 border-2 flex flex-col p-4 rounded-xl">

          <PosterSlider />

          <div className="flex flex-col sm:flex-row mt-6 gap-6">

            <div className="flex flex-col items-center w-full">
              <h3 className="text-sm sm:text-base font-semibold">
                Summary (Last Year)
              </h3>
              <img src={Summary} alt="summary" className="w-16 mt-2" />
              <ul className="mt-3 space-y-2 list-disc text-xs">
                <li>Total Offers: 450+</li>
                <li>Top Package: 27 LPA</li>
                <li>Average: 5 LPA</li>
              </ul>
            </div>

<<<<<<< HEAD
            <div className="flex flex-col items-center justify-center w-full h-full m-2 ">
              <h3 className="m-1 text-sm sm:text-[12px]">Placement Status 25-26</h3>
              <img src={Stats} alt='stats' className="w-[20%]" />
              {yearData.filter((item) => { return item["Year"] === '2023-24' }).map((item) => {
                // console.log(item.PackageRange)

                return (
                  <ul key={item.Year} className="p-1 mt-2 space-y-2 list-disc ">
                    <li className="text-xs">Total Offers: 414+</li>
                    <li className="text-xs">Top Package: 61 LPA</li>
                    <li className="text-xs">Average: 5 LPA</li>
=======
            <div className="flex flex-col items-center w-full">
              <h3 className="text-sm sm:text-base font-semibold">
                Placement Status 25-26
              </h3>
              <img src={Stats} alt="stats" className="w-16 mt-2" />
              {yearData
                .filter((item) => item["Year"] === '2023-24')
                .map((item) => (
                  <ul key={item.Year} className="mt-3 space-y-2 list-disc text-xs">
                    <li>Total Offers: 414+</li>
                    <li>Top Package: 25 LPA</li>
                    <li>Average: 4 LPA</li>
>>>>>>> 71479bdf957be16faa731e8d6b53d93435191c51
                  </ul>
                ))}
            </div>

          </div>
        </div>

<<<<<<< HEAD
      {/* Section for Contact & Brochures for mobile view */}
      <div className="block m-2 sm:hidden">
        <div className="w-full my-8 border-2 rounded-md nav-light-shadows">
          {/* Headers Section - Mobile */}
          <div className="grid grid-cols-2 h-full">
            <div className="m-3 min-h-[120px] flex flex-col justify-center">
              <h3 className="m-2 text-base leading-tight">Recruiters</h3>
              <h4 className="m-2 text-base leading-tight">Interested in Recruiting from SGGSIE&T</h4>
            </div>
            <div className="m-3 min-h-[120px] flex flex-col justify-center">
              <h3 className="m-2 text-base leading-tight">Our Brochures</h3>
              <h3 className="m-2 text-base leading-tight">See Flyer & Brochures of Our Institute</h3>
            </div>
          </div>
          {/* Buttons Grid - Mobile 2 rows x 2 columns */}
          <div className="grid grid-cols-2 grid-rows-2 gap-3 p-4 mx-2">
            {/* Row 1 */}
            <Link to='/jaf_recuriment' className="font-bold">
              <p className="py-3 px-2 text-sm text-center text-black bg-orange-300 border-2 rounded-xl hover:cursor-pointer hover:bg-orange-400 transition-colors h-full flex items-center justify-center leading-tight">Job Announcement Form</p>
            </Link>
            <a target='_blank' rel="noreferrer" href='https://drive.google.com/file/d/1wBrfNgAy2M7AeJt8NhKC_pkZCUsSzXb0/view?usp=drive_link' className="font-bold">
              <p className="py-3 px-2 text-sm text-center text-black bg-orange-300 border-2 rounded-xl hover:cursor-pointer hover:bg-orange-400 transition-colors h-full flex items-center justify-center leading-tight">Placement Brochure</p>
            </a>
            {/* Row 2 */}
            <Link to='/contactus' className="font-bold">
              <p className="py-3 px-2 text-sm text-center text-black bg-orange-300 border-2 rounded-xl hover:cursor-pointer hover:bg-orange-400 transition-colors h-full flex items-center justify-center leading-tight">Contact Us</p>
            </Link>
            <a target='_blank' rel="noreferrer" href='https://drive.google.com/file/d/1syO4OcmsHiDNOwZxo-6lQAiG18bzIkRd/view?usp=sharing' className="font-bold">
              <p className="py-3 px-2 text-sm text-center text-black bg-orange-300 border-2 rounded-xl hover:cursor-pointer hover:bg-orange-400 transition-colors h-full flex items-center justify-center leading-tight">SGGSIE&T TPO Flyer</p>
            </a>
          </div>
        </div>
=======
>>>>>>> 71479bdf957be16faa731e8d6b53d93435191c51
      </div>
    </>
  );
};

export default SectionWrapper(Hero, "");

