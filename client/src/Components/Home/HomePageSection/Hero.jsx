// import react from "react";
import React from "react";
import { Link } from "react-router-dom";
import PosterSlider from './PosterSlider';
import Summary from "../../../img/Gallary/summary_report_icon.jpg";
import Stats from "../../../img/Gallary/statistics.jpg";
import SectionWrapper from "../../../Higher_Order_Components/SectionWrapper";

const Hero = () => {
  return (
    <>
      {/* main wrapper container */}
      <div className="flex flex-col items-center justify-center w-full sm:flex-row">

        {/* left section */}
        <div className="sm:w-[60%] w-[100%] h-full flex flex-col p-2">
          <div className="flex flex-col justify-center items-left">
            <h3 className="my-2 text-lg text-gray-700">Welcome To</h3>
            <h2 className="my-2 text-3xl">
              Training & Placement Cell <br />
              Shri Guru Gobind Singhji Institute Of
              Engineering & Technology
            </h2>
            <p>
              The training and placement cell is responsible for all the placement activities of all the departments of the institute.
            </p>
          </div>

          <div className="w-full my-8 border-2 rounded-md nav-medium-light-shadows">
            <div className="m-3 sm:m-4">
              <h2 className="m-2 text-base sm:text-2xl">Recruiters</h2>
              <h3 className="m-2 text-base sm:text-2xl">Interested in Recruiting from SGGSIE&T</h3>
            </div>
            <div className="p-4">
              <p className="p-2 text-xl bg-orange-300 border-2 rounded-xl hover:cursor-pointer"><Link to='/jaf_recuriment' className="font-bold">Fill JNF</Link></p>
              <p className="p-2 text-xl bg-orange-300 border-2 rounded-xl hover:cursor-pointer"><Link to='/contactus' className="font-bold">Contact</Link></p>
            </div>
          </div>
        </div>

        {/* right section */}
        <div className="sm:w-[40%] w-[95%] nav-medium-light-shadows h-full m-4 border-2 flex flex-col">
          <div>
            <PosterSlider />
          </div>
          <div className="flex flex-col items-center justify-center sm:flex-row ">
            <div className="m-2 nav-light-shadows sm:w-[50%] w-[90%] h-[100%] rounded-xl flex flex-col items-center justify-center">
              <h2 className="text-xl sm:text-sm">Placement Summary(Last Year)</h2>
              <img src={Summary} alt='summary' className="w-[20%]" />
              <ul className="p-1 mt-2 space-y-2 list-disc">
                <li className="text-xs">Total Offers: 485</li>
                <li className="text-xs">Top Package: 60 LPA</li>
                <li className="text-xs">Average: 6.2 LPA</li>
              </ul>
            </div>
            <div className="m-2 nav-light-shadows sm:w-[50%] w-[90%] h-[100%] rounded-xl flex flex-col items-center justify-center">
              <h2 className="text-xl sm:text-sm">Placement Stats 23-24</h2>
              <img src={Stats} alt='summary' className="w-[20%]" />
              <ul className="p-1 mt-2 space-y-2 list-disc">
                <li className="text-xs">Total Offers: 9+</li>
                <li className="text-xs">Top Package: 12 LPA</li>
                <li className="text-xs">Average: 7.02 LPA</li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionWrapper(Hero, "");

