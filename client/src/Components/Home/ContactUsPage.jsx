import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { OurTeam } from "./OurTeam";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";
import { fadeIn, } from '../../utils/motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import ContactUsIcon from "../../img/ContactUsIcon.png"
import Secretary from "../../img/team2023_2024/_2SHARVARI-MILIND-SALODKAR.jpg";

const LocationPin = ({ text }) => (
  <div className="marker">
    {text}
  </div>
);

export const ContactUsPage = () => {
  useEffect(() => {
    document.title = "Contact Us | SGGS Training & Placement";
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <motion.div variants={
        fadeIn("up", "", 0.1, 1)
      }
      >
        <div className="relative w-full h-5/6 bg-blue-radial-gradient">
          {/* top div */}
          <div className="flex flex-col items-center justify-between mx-2 mb-4 sm:flex-row">
            <div className="text-center w-[50%] flex flex-col items-center justify-center mt-4">
              <div>
                <h1 className="p-2 text-2xl text-left sm:text-3xl sm:p-4">
                  Looking to Hire from SGGSIT&T?<br />Fill the Job Announcement Form today!!!
                </h1>
              </div>
              <div className="flex flex-col items-center justify-between sm:flex-row">
                <a href='https://docs.google.com/document/d/1auq7RC49WYZ_oQCxjm0BzgKaWAGP3G-A/edit?usp=sharing&ouid=106712804397345244222&rtpof=true&sd=true' target="_blank" className="p-2 m-2 bg-white border-0 rounded-xl outline-0 hover:cursor-pointer">
                  <button >Fill JAF Direct Recruitment</button>
                </a>
                <a href='https://docs.google.com/document/d/1BD-oeS6kxzI19G-ylMq_4kNKLFrKR6s6/edit?usp=sharing&ouid=106712804397345244222&rtpof=true&sd=true' target="_blank" className="p-2 m-2 bg-gray-300 border-0 rounded-xl outline-0 hover:cursor-pointer">
                  <button >Fill JAF Internship</button>
                </a>
              </div>
            </div>


            <div className="sm:w-[40%] w-[80%] text-center flex justify-center items-center mt-4">
              <img src={ContactUsIcon} alt="contact" className="sm:w-[80%] h-[100%] mb-4 mr-4 w-[100%] rounded-xl" />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div variants={
        fadeIn("left", "", 0.1, 1)
      }
      >
        <div className="relative w-full h-full">
          {/* top div */}
          <div className="flex flex-col items-center justify-between mx-2 mb-4 ">
            {/* Heading  */}
            <div className="text-center w-[80%] flex flex-col items-start justify-start mt-4">
              <h2 className="p-2 text-base text-center sm:text-xl sm:p-4">
                Get In Touch
              </h2>
              <h3 className="p-2 text-3xl text-center sm:text-4xl sm:p-4">
                Contact Us.
              </h3>
            </div>

            {/* Contact Cards */}
            <div className="flex flex-col items-center justify-between w-4/5 text-center sm:flex-row">
              {/* Address */}
              <Tilt className='xs:w-[350px] w-full my-4'>
                <motion.div
                  variants={fadeIn("right", "spring", 0.5 * 0, 0.75)}
                  className='w-full nav-light-shadows p-[1px] rounded-[20px] shadow-card'
                >
                  {/* <p>{title}</p> */}
                  <div options={{
                    max: 45,
                    scale: 1,
                    speed: 450
                  }}
                    className=' rounded-[20px] py-2 px-3 h-96 flex justify-evenly items-center flex-col'
                  >
                    <div className="flex items-center justify-center w-[100%]">
                      <h3 className='mx-4 text-2xl font-bold text-center'>Address</h3>
                      <FontAwesomeIcon icon={faMapLocationDot} />
                    </div>
                    <p className="p-2 m-2 border-2 border-blue-400 hover:bg-blue-400 rounded-xl hover:cursor-pointer">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://maps.app.goo.gl/KdkCbFL9v8gFrEm98"
                      >
                        SGGSIE&T, <br /> Vishnupuri, Nanded, Maharashtra-431606 India
                      </a>
                    </p>
                  </div>
                </motion.div>

              </Tilt>
              <Tilt className='xs:w-[350px] w-full my-4'>
                <motion.div
                  variants={fadeIn("right", "spring", 0.5 * 0, 0.75)}
                  className='w-full nav-light-shadows p-[1px] rounded-[20px] shadow-card'
                >
                  {/* <p>{title}</p> */}
                  <div options={{
                    max: 45,
                    scale: 1,
                    speed: 450
                  }}
                    className='rounded-[20px]  py-2 px-3 h-96 flex justify-evenly items-center flex-col'
                  >
                    <div className="flex items-center justify-center w-[100%]">
                      <h3 className='mx-4 text-xl font-bold text-center'>Write Us An Email</h3>
                      <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <div className="mt-2">
                        <h4>TPO & Dean </h4>
                        <p className="p-2 m-2 border-2 border-blue-400 hover:bg-blue-400 rounded-xl hover:cursor-pointer"><a href={`mailto:tpo@sggs.ac.in`}>tpo@sggs.ac.in</a></p>
                        <p className="p-2 m-2 border-2 border-blue-400 hover:cursor-pointer hover:bg-blue-400 rounded-xl"><a href={`mailto:tnpcell@sggs.ac.in`} >tnpcell@sggs.ac.in</a></p>
                      </div>
                      <div>
                        <h4>Placement Co-ordinators:</h4>
                        <p className="p-2 m-2 border-2 border-blue-400 hover:cursor-pointer hover:bg-blue-400 rounded-xl"><a href={`mailto:tnpcell@sggs.ac.in`} >2021bit027@sggs.ac.in</a></p>
                        <p className="p-2 m-2 border-2 border-blue-400 hover:cursor-pointer hover:bg-blue-400 rounded-xl"><a href={`mailto:tnpcell@sggs.ac.in`} >2021bcs155@sggs.ac.in</a></p>
                      </div>
                    </div>
                  </div>
                </motion.div>

              </Tilt>
              <Tilt className='xs:w-[350px] w-full my-4'>
                <motion.div
                  variants={fadeIn("right", "spring", 0.5 * 0, 0.75)}
                  className='w-full nav-light-shadows p-[1px] rounded-[20px] shadow-card'
                >
                  {/* <p>{title}</p> */}
                  <div options={{
                    max: 45,
                    scale: 1,
                    speed: 450
                  }}
                    className=' rounded-[20px]  py-2 px-3 h-96 flex justify-evenly items-center flex-col'
                  >
                    <div className="flex items-center justify-center w-[100%]">
                      <h3 className='mx-4 text-xl font-bold text-center'>Call Us</h3>
                      <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <div className="mt-2">
                        <h4>TPO: </h4>
                        <p className="p-2 m-2 border-2 border-blue-400 hover:bg-blue-400 rounded-xl hover:cursor-pointer"><a href={`tel:+91-2462-269182`}>+91-2462-269182 (Office)</a></p>

                      </div>
                      <div>
                        <h4>TPO Dean:</h4>
                        <p className="p-2 m-2 border-2 border-blue-400 hover:cursor-pointer hover:bg-blue-400 rounded-xl"><a href={`tel:+91 94218 68526`} >+919421868526</a></p>
                      </div>
                      <div>
                        <h4>TPO Assistant:</h4>
                        <p className="p-2 m-2 border-2 border-blue-400 hover:cursor-pointer hover:bg-blue-400 rounded-xl"><a href={`tel:+91 75078 77206`} >+91 75078 77206</a></p>
                      </div>
                    </div>
                  </div>
                </motion.div>

              </Tilt>

            </div>
          </div>
        </div>
      </motion.div>


      <div className="flex flex-col items-center justify-between mx-2 mb-4 ">
        <div className="text-center w-[80%] flex flex-col items-start justify-start mt-4">
          <h2 className="p-2 text-3xl text-center sm:text-4xl sm:p-4">
            Meet Our Team.
          </h2>
        </div>
      </div>
      <OurTeam />

      <div className="flex flex-col items-center justify-between mx-2 mb-4 ">
        <div className="text-center w-[80%] flex flex-col items-start justify-start mt-4">
          <h2 className="p-2 text-3xl text-center sm:text-4xl sm:p-4">
            Walk Us Through.
          </h2>
        </div>
      </div>
      {/* map */}
      <div style={{ height: '400px', width: '80%' }} className="mx-auto relative w-[100%] mb-8" >

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8859874908458!2d77.292024!3d19.112657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bce29f7545a76b3%3A0x44c589a50ec5980e!2sS%20G%20G%20S%20College%20Vishnupuri!5e0!3m2!1sen!2sin!4v1698244204796!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
          className="absolute h-[100%] w-[100%] m-auto nav-light-shadows"
        ></iframe>


      </div>
    </>
  );
}
