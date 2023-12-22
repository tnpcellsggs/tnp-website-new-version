import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from '../../../utils/motion';
import SggsCampus_2 from "../../../img/sggs_campus_2.jpg";
import SectionWrapper from "../../../Higher_Order_Components/SectionWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedinIn,
  faSquareXTwitter
} from "@fortawesome/free-brands-svg-icons";
// import SggsCampus from "../../../img/SGGS_Campus.jpg";

const AboutInfo = () => {

  return (
    <>
      <motion.div variants={
        fadeIn("left", "", 0.1, 1)
      }
      >

        <div className="p-1 m-2 nav-light-shadows">
          {/* top div */}
          <div className="flex flex-col items-center justify-between mt-4 sm:flex-row">
            <div className="text-center w-[50%]">
              <h2 className="p-2 text-3xl text-center sm:text-4xl sm:p-4">
                About SGGSIE&T
              </h2>
            </div>
            <ul className="flex items-center justify-center p-2 sm:p-4 ">
              {/* <li className="p-2 m-2 hover:cursor-pointer"><a target='_blank' href='https://twitter.com/tnp_sggsiet' rel="noreferrer"><FontAwesomeIcon color="#000" className="w-[100%]" icon={faTwitter} /></a></li> */}
              <li className="p-2 m-2 hover:cursor-pointer"><a target='_blank' href='https://twitter.com/tnp_sggsiet' rel="noreferrer"><FontAwesomeIcon icon={faSquareXTwitter} className="w-[100%]"  /> </a></li>
              <li className="p-2 m-2 hover:cursor-pointer"><a target='_blank' href='https://www.linkedin.com/in/sggs-tnpcell/' rel="noreferrer"><FontAwesomeIcon color="#000" className="w-[100%]" icon={faLinkedinIn} /></a></li>
              <li className="p-2 m-2 hover:cursor-pointer"><a target='_blank' href='https://www.instagram.com/tnp_sggsiet/' rel="noreferrer"><FontAwesomeIcon color="#000" className="w-[100%]" icon={faInstagram} /></a></li>
            </ul>
          </div>

          {/* Below div  */}
          <div className="flex flex-col items-center justify-center sm:flex-row-reverse">
            <div className="sm:w-[30%] w-[80%] text-center flex flex-col justify-center items-center">
              <img src={SggsCampus_2} alt="sggscampus" className="mb-2 sm:w-full rounded-xl md:w-[100%]" />
              <p className="mb-2 text-xl font-bold text-center">SGGSIE&T Campus</p>
            </div>

            <div className="p-1 align-top sm:p-2.5 mx-1 sm:mx-2 text-lg text-justify font-normal w-[86%] sm:w-[60%]">

              <p className="sm:p-2.5 p-1 mx-1 sm:mx-2 md:text-[12px] text-[12px] lg:text-[16px] text-justify font-normal w-[90%] md:text-sm lg:text-lg">
                Welcome to the Industry Liaison one-stop office which takes care of
                (a) Institute-Industry Liaison, (b) Institute-Alumni Liaison, and (c)
                Training and Placement activities.
                We act as interface between institute and industry for Training
                and Placement activities, Internships, Innovative Projects, Industry
                Projects, Incubation, Startup, Hackathons, Alumni relations, etc.{" "}
                Our aim is to realize the dreams of students, parents, and society in
                general. The most important one is to make our students "engineers"
                who would be able to contribute to the society.
              </p>
              <p className="sm:p-2.5 p-1 mx-1 sm:mx-2 md:text-[12px] text-[12px] lg:text-[16px] text-justify font-normal w-[90%] md:text-sm lg:text-lg">
                Our team has following functions and responsibilities:
                <ul className='mt-2 ml-2 space-y-2 md:text-[12px] text-[12px] lg:text-[16px] list-disc '>
                  <li>Organizes industrial visits to foster Industry-Institute interaction.</li>
                  <li>Facilitates in-plant training and projects aligning with industry needs.</li>
                  <li>Channels feedback from visiting companies to enhance the curriculum.</li>
                  <li>Provides individual expert counseling for career guidance.</li>
                </ul>
              </p>

            </div>
          </div>


        </div>
      </motion.div>
    </>
  );
}



export default SectionWrapper(AboutInfo, "");