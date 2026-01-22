import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../../../Higher_Order_Components/SectionWrapper";
// import HatkarSir from "../../../img/_hatkarsir_.jpg";
import HatkarSir from "../../../img/HatkarSir.jpg";
import { fadeIn } from '../../../utils/motion';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//     faInstagram,
//     faTwitter,
//     faLinkedinIn,
// } from "@fortawesome/free-brands-svg-icons";

const Tpo = () => {
    return (
        <>
            <motion.div variants={
                fadeIn("left", "", 0.1, 1)
            }
            >
                <div className="p-1 m-2 nav-light-shadows">
                    {/* top div */}
                    <div className="flex flex-col items-center justify-between m-4 sm:flex-row">
                        <div className="mt-4 w-full sm:w-[50%] text-center">
                            <h2 className="p-1 text-3xl text-center sm:text-4xl sm:p-4 w-[100%]">
                                From TPO's Desk
                            </h2>
                        </div>
                        <ul className="flex items-center justify-center p-2 sm:p-4 ">
                            {/* <li className="p-2 m-2 border-2 rounded-lg hover:cursor-pointer"><a target='_blank' rel="noreferrer" href='https://twitter.com/tnp_sggsiet'><FontAwesomeIcon color="#000" className="w-[100%]" icon={faTwitter} /></a></li>
                            <li className="p-2 m-2 border-2 rounded-lg hover:cursor-pointer"><a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/sggs-tnpcell/'><FontAwesomeIcon color="#000" className="w-[100%]" icon={faLinkedinIn} /></a></li>
                            <li className="p-2 m-2 border-2 rounded-lg hover:cursor-pointer"><a target='_blank' rel="noreferrer" href='https://www.instagram.com/tnp_sggsiet/'><FontAwesomeIcon color="#000" className="w-[100%]" icon={faInstagram} /></a></li> */}
                        </ul>
                    </div>

                    {/* Below div  */}
                    <div className="flex flex-col items-center justify-center sm:flex-row-reverse">
                        <div className="sm:w-[30%] w-[70%] md:w-[35%] lg:w-[30%] text-center flex flex-col justify-center items-center">
                            <img src={HatkarSir} alt="tpo" className="sm:w-[75%] h-[70%] mb-2 rounded-xl " />
                            <p className="mb-2 text-xl font-bold text-center">Dr.Sandeep B. Mundhe</p>
                        </div>

                        <div className="p-1 align-top sm:p-2.5 mx-1 sm:mx-2 text-lg text-justify font-normal w-[86%] sm:w-[60%]">

                            <p className="sm:p-2.5 p-1 mx-1 sm:mx-2 md:text-[12px] text-[12px] lg:text-[16px] text-justify font-normal w-[90%] md:text-sm lg:text-lg">
                                The Institute is committed to providing state-of-the-art
                                technical education in a variety of fields and for
                                facilitating the transmission of knowledge in keeping with
                                the latest developments in methods of teaching. Each student
                                is also required to take certain minimum course credits in
                                the Department of Humanities and Social Sciences which
                                greatly enhances their outlook on society and its needs.
                            </p>
                            <p className="sm:p-2.5 p-1 mx-1 sm:mx-2 md:text-[12px] text-[12px] lg:text-[16px] text-justify font-normal w-[90%] md:text-sm lg:text-lg">
                                Our team of placement coordinators and dedicated volunteers will ensure that the recruitment process becomes a smooth and pleasing experience for both the recruiters and the students. Feel free to contact the Training & Placement Office. With this, I welcome all the recruiters to SGGSIE&T.
                            </p>
                            <p className="sm:p-2.5 p-1 mx-1 sm:mx-2 md:text-[12px] text-[12px] lg:text-[16px] text-justify font-normal w-[90%] md:text-sm lg:text-lg">
                                Warm Regards <br />
                                Training & Placement Cell, <br />
                                SGGSIE&T, Nanded <br />
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default SectionWrapper(Tpo, "");