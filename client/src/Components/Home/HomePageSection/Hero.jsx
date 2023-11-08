// import react from "react";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PosterSlider from './PosterSlider';
import Summary from "../../../img/Gallary/summary_report_icon.jpg";
import Stats from "../../../img/Gallary/statistics.jpg";
import SectionWrapper from "../../../Higher_Order_Components/SectionWrapper";
import { AdminContext } from "../../../App";

const Hero = () => {
  // using context api to save all the states & use it all over the app
  const graphContext = useContext(AdminContext);
  const [yearTempData, setTempData] = useState([]);

  const { getYearWiseAlldetails } = graphContext;
  useEffect(() => {
    // getAlldetails();
    getYearWiseAlldetails().then((data) => setTempData(data));
    // console.log(yearTempData[yearTempData.length - 1].PackageRange);
  }, []);

  return (
    <>
      {/* main wrapper container */}
      <div className="flex flex-col items-center justify-center w-full sm:flex-row">

        {/* left section */}
        <div className="sm:w-[60%] w-[100%] h-full flex flex-col p-2">
          <div className="flex flex-col justify-center items-left">
            <h1 className="my-2 text-lg text-gray-700">Welcome To</h1>
            <h3 className="my-2 text-3xl">
              Training & Placement Cell <br />
              Shri Guru Gobind Singhji Institute Of
              Engineering & Technology
            </h3>
            <p>
              &ldquo;Our Training and Placement Cell Is For The Students And By The Students.&ldquo;
            </p>
          </div>

          <div className="w-full my-8 border-2 rounded-md nav-medium-light-shadows">
            <div className="m-3 sm:m-4">
              <h2 className="m-2 text-base sm:text-2xl">Recruiters</h2>
              <h3 className="m-2 text-base sm:text-2xl">Interested in Recruiting from SGGSIE&T</h3>
            </div>
            <div className="flex items-center justify-start p-4">
              <Link to='/jaf_recuriment' className="w-full font-bold"><p className="p-2 text-xl text-center bg-orange-300 border-2 rounded-xl hover:cursor-pointer">Fill JAF</p></Link>
              <Link to='/contactus' className="w-full font-bold"><p className="p-2 text-xl text-center bg-orange-300 border-2 rounded-xl hover:cursor-pointer">Contact Us</p></Link>
            </div>
          </div>
        </div>

        {/* right section */}
        <div className="sm:w-[40%] w-[95%] nav-medium-light-shadows h-full m-4 border-2 flex flex-col">
          <div>
            <PosterSlider />
          </div>
          <div className="flex flex-col items-center justify-center sm:flex-row m-[12px] ">
            <div className="m-2 nav-light-shadows sm:w-[50%] w-[90%] h-[100%] rounded-xl flex flex-col items-center justify-center">
              <h2 className="text-sm ">Placement Summary(Last Year)</h2>
              <img src={Summary} alt='summary' className="w-[20%]" />
              <ul className="p-1 mt-2 space-y-2 list-disc">
                <li className="text-xs">Total Offers: 480+</li>
                <li className="text-xs">Top Package: 60 LPA</li>
                <li className="text-xs">Average: 6.2 LPA</li>
              </ul>
            </div>
            <div className="m-2 nav-light-shadows sm:w-[50%] w-[90%] h-[100%] rounded-xl flex flex-col items-center justify-center">
              <h2 className="text-sm ">Placement Stats 23-24</h2>
              <img src={Stats} alt='stats' className="w-[20%]" />
              <ul className="p-1 mt-2 space-y-2 list-disc">
                <li className="text-xs">Total Offers: 9+</li>
                {/* <li className="text-xs">Top Package: {yearTempData[yearTempData.length - 1].PackageRange}</li>
                <li className="text-xs">Average: {yearTempData[yearTempData.length - 1].AveragePackage}</li> */}
                <li className="text-xs">Top Package: 12 LPA</li>
                <li className="text-xs">Average: 6.7 LPA</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionWrapper(Hero, "");

