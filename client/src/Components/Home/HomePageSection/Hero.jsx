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
                  </ul>
                ))}
            </div>

          </div>
        </div>

      </div>
    </>
  );
};

export default SectionWrapper(Hero, "");

