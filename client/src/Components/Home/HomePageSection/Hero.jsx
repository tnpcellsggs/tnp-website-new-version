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
  const placementContext = useContext(AdminContext);
  const [yearData, setTempData] = useState([]);

  const { getYearWiseAlldetails } = placementContext;
  useEffect(() => {
    // getAlldetails();
    getYearWiseAlldetails().then((data) => setTempData(data));
  });

  return (
    <>
      {/* main wrapper container */}
      <div className="flex flex-col items-center justify-center w-full sm:flex-row">

        {/* left section */}
        <div className="sm:w-[60%] w-[100%] h-full flex flex-col p-2">
          <div className="flex flex-col justify-center items-left">
            <h1 className="my-2 text-lg text-gray-700">Welcome To</h1>
            <h2 className="my-2 text-3xl">
              Training & Placement Cell <br />
              Shri Guru Gobind Singhji Institute Of
              Engineering & Technology
            </h2>
            <p>
              &ldquo;Our Training and Placement Cell Is For The Students And By The Students.&ldquo;
            </p>
          </div>

          <div className="flex flex-col items-center justify-center w-full my-8 border-2 rounded-md nav-medium-light-shadows sm:flex-row">
            <div className="w-full sm:w-[50%] ">
              <div className="m-3 sm:m-4">
                <h3 className="m-2 text-2xl">Recruiters</h3>
                <h3 className="m-2 text-2xl">Interested in Recruiting from SGGSIE&T</h3>
              </div>
              <div className="flex flex-col items-center justify-start p-2 m-2">
                <Link to='/jaf_recuriment' className="w-full font-bold"><p className="p-2 mt-1 mb-1 text-xl text-center text-black bg-orange-300 border-2 rounded-xl hover:cursor-pointer">Job Announcement Form</p></Link>
                <Link to='/contactus' className="w-full font-bold"><p className="p-2 mt-1 mb-1 text-xl text-center text-black bg-orange-300 border-2 rounded-xl hover:cursor-pointer">Contact Us</p></Link>
              </div>
            </div>

            <div className="w-full sm:w-[50%]">
              <div className="m-3 sm:m-4">
                <h3 className="m-2 text-2xl">Our Brouchers</h3>
                <h3 className="m-2 text-2xl">See Flyer & Brouchers of Our Institute</h3>
              </div>
              <div className="flex flex-col items-center justify-start p-2 m-2">
                <a target='_blank' rel="noreferrer" href='https://drive.google.com/file/d/15KfUk60qOmEl8BYD3BN1u9q8QXyXx_Se/view?usp=drivesdk' className="w-full font-bold"><p className="p-2 mt-1 mb-1 text-xl text-center text-black bg-orange-300 border-2 rounded-xl hover:cursor-pointer">Placement Broucher</p></a>
                <a target='_blank'  rel="noreferrer" href='https://drive.google.com/file/d/1Zk4T5Bw7Y8TC5bX43BwRH6hP6PB7fG3F/view?usp=drivesdk' className="w-full font-bold"><p className="p-2 mt-1 mb-1 text-xl text-center text-black bg-orange-300 border-2 rounded-xl hover:cursor-pointer">SGGSIE&T TPO Flyer</p></a>
              </div>
            </div>
          </div>
        </div>

        {/* right section */}
        <div className="sm:w-[40%] w-[95%] nav-medium-light-shadows h-full m-4 border-2 flex flex-col">
          <div>
            <PosterSlider />
          </div>
          <div className="flex flex-col items-center justify-center sm:flex-row m-[12px] ">

            <div className="flex flex-col items-center justify-center w-full h-full m-2 nav-light-shadows rounded-xl">
              <h3 className="m-1 text-sm">Placement Summary(Last Year)</h3>
              <img src={Summary} alt='summary' className="w-[20%]" />
              <ul className="p-1 mt-2 space-y-2 list-disc">
                <li className="text-xs">Total Offers: 480+</li>
                <li className="text-xs">Top Package: 60 LPA</li>
                <li className="text-xs">Average: 6.2 LPA</li>
              </ul>
            </div>

            <div className="flex flex-col items-center justify-center w-full h-full m-2 nav-light-shadows rounded-xl">
              <h3 className="m-1 text-sm">Placement Stats 23-24</h3>
              <img src={Stats} alt='stats' className="w-[20%]" />
              {yearData.filter((item) => { return item["Year"] === '2023-24' }).map((item) => {
                return (
                  <ul key={item.Year} className="p-1 mt-2 space-y-2 list-disc ">
                    <li className="text-xs">Total Offers: 15+</li>
                    <li className="text-xs">Top Package: {item.PackageRange.slice(4,12)}</li>
                    <li className="text-xs">Average: {item.AveragePackage} LPA</li>
                  </ul>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionWrapper(Hero, "");

