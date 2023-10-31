import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionWrapper from "../../../Higher_Order_Components/SectionWrapper";
import HatkarSir from "../../../img/HatkarSir.jpg";
import { fadeIn, textVariant } from '../../../utils/motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faTwitter,
    faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Tpo = () => {
    return (
        <>
            <motion.div variants={
                fadeIn("left", "", 0.1, 1)
            }
            >

                <div className="m-2 nav-medium-light-shadows">
                    {/* top div */}
                    <div className="flex flex-col items-center justify-between mx-2 mb-4 sm:flex-row">
                        <div className="text-center w-[50%]">
                            <h2 className="p-2 text-3xl text-left text-center sm:text-4xl sm:p-4 w-[100%]">
                                From TPO's Desk
                            </h2>
                        </div>
                        <ul className="flex items-center justify-center p-2 sm:p-4 ">
                            <li className="p-2 m-2 border-2 rounded-lg hover:cursor-pointer"><a target='_blank' href='https://twitter.com/tnp_sggsiet'><FontAwesomeIcon color="#000" className="w-[100%]" icon={faTwitter} /></a></li>
                            <li className="p-2 m-2 border-2 rounded-lg hover:cursor-pointer"><a target='_blank' href='https://www.linkedin.com/in/sggs-tnpcell/'><FontAwesomeIcon color="#000" className="w-[100%]" icon={faLinkedinIn} /></a></li>
                            <li className="p-2 m-2 border-2 rounded-lg hover:cursor-pointer"><a target='_blank' href='https://www.instagram.com/tnp_sggsiet/'><FontAwesomeIcon color="#000" className="w-[100%]" icon={faInstagram} /></a></li>
                        </ul>
                    </div>

                    {/* below div */}
                    <div className="flex flex-col items-center justify-center sm:flex-row sm:flex-row-reverse">
                        <div className="sm:w-[40%] w-[60%] text-center flex flex-col justify-center items-center">
                            <img src={HatkarSir} alt="" className="sm:w-[60%] h-[70%] mb-2  rounded-xl" />
                            <p className="mb-2 text-center text-secondary">Prof. S.S.Hatkar</p>
                        </div>
                        <p className="p-2.5 mx-2 text-lg font-normal w-[80%] sm:w-[70%]">
                            <span>
                                The Institute is committed to providing state-of-the-art
                                technical education in a variety of fields and for
                                facilitating the transmission of knowledge in keeping with
                                the latest developments in methods of teaching. Each student
                                is also required to take certain minimum course credits in
                                the Department of Humanities and Social Sciences which
                                greatly enhances their outlook on society and its needs.
                            </span>
                            <br />
                            <span>
                                The Institute is committed to providing state-of-the-art
                                Our team of placement coordinators and dedicated volunteers
                                will ensure that the recruitment process becomes a smooth
                                and pleasing experience for both the recruiters and the
                                students. Feel free to contact the Training & Placement
                                Office. With this, I welcome all the recruiters to SGGSIE&T.
                            </span>
                        </p>
                    </div>
                </div>
            </motion.div>
        </>
    );
}



export default SectionWrapper(Tpo, "");