import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from '../../../utils/motion';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionWrapper from "../../../Higher_Order_Components/SectionWrapper";
// import {
//   faInstagram,
//   faTwitter,
//   faLinkedinIn,
// } from "@fortawesome/free-brands-svg-icons";
// import MBKokare from "../../../img/kokare-sir_2.jpeg";
import MBKokare_2 from "../../../img/MBKokare_2.jpg";

const Director = () => {
  return (
    <>
      <motion.div variants={
        fadeIn("right", "", 0.1, 1)
      }
      >

        <div className="p-1 m-2 nav-light-shadows">

          {/* top div */}
          <div className="flex flex-col items-center justify-between mt-4 sm:flex-row-reverse">
            <div className="mt-2 w-full sm:w-[80%] sm:text-left text-center ">
              <h2 className="p-2 text-3xl text-center sm:text-4xl sm:p-4">
                Director's Message
              </h2>
            </div>
            <ul className="flex items-center justify-center p-2 sm:p-4 ">
              {/* <li className="p-2 m-2 border-2 rounded-lg hover:cursor-pointer"><a target='_blank'  rel="noreferrer" href='https://twitter.com/tnp_sggsiet'><FontAwesomeIcon color="#000" className="w-[100%]" icon={faTwitter} /></a></li>
              <li className="p-2 m-2 border-2 rounded-lg hover:cursor-pointer"><a target='_blank'  rel="noreferrer" href='https://www.linkedin.com/in/sggs-tnpcell/'><FontAwesomeIcon color="#000" className="w-[100%]" icon={faLinkedinIn} /></a></li>
              <li className="p-2 m-2 border-2 rounded-lg hover:cursor-pointer"><a target='_blank'  rel="noreferrer" href='https://www.instagram.com/tnp_sggsiet/'><FontAwesomeIcon color="#000" className="w-[100%]" icon={faInstagram} /></a></li> */}
            </ul>
          </div>

          {/* below div */}
          <div className="flex flex-col items-center justify-center sm:flex-row">
            <div className="sm:w-[40%] w-[70%] text-center flex flex-col justify-center items-center">
              <img src={MBKokare_2} alt="director" className="sm:w-[50%] lg:w-[50%] md:w-[55%] mb-2 rounded-xl " />
              <p className="mb-2 text-xl font-bold text-center">Dr. Manesh B. Kokare</p>
            </div>

            <div className="p-1 align-top sm:p-2.5 mx-1 sm:mx-2 text-lg text-justify font-normal w-[86%] sm:w-[65%]">

              <p className="sm:p-2.5 p-1 mx-1 sm:mx-2 md:text-[12px] text-[12px] lg:text-[16px] text-justify font-normal w-[90%] md:text-sm lg:text-lg">
                Greetings and a very warm welcome to SGGSIE&T! <br />
                With a vision of education of human power for technological
                excellence, Shri Guru Gobind Singhji Institute of
                Engineering and Technology stands as one of the prestigious
                institutes in the state of Maharashtra.
              </p>
              <p className="sm:p-2.5 p-1 mx-1 sm:mx-2 md:text-[12px] text-[12px] lg:text-[16px] text-justify font-normal w-[90%] md:text-sm lg:text-lg">
                The purpose of education is to transform proactive learners
                into self-actualized learners. Students are encouraged to
                harness their inquisitive skills with proactive learning,
                soft skills which are required in all professions,
                problem-solving skills along with programming languages to
                equip our students to face the technological problems of the
                future and imbibe Universal Human Values for sustainable
                achievements.
              </p>
              <p className="sm:p-2.5 p-1 mx-1 sm:mx-2 md:text-[12px] text-[12px] lg:text-[16px] text-justify font-normal w-[90%]  md:text-sm lg:text-lg">
                I look forward to the placement season 2023-24 and wish the
                students all the best.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}


export default SectionWrapper(Director, "");

