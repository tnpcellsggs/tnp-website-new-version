/** @jsxImportSource @emotion/react */
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { css } from '@emotion/react';
// import { css } from ' @emotion/css';
// import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";
import { useLayoutEffect } from 'react';
import { fadeIn } from '../../utils/motion';
import { team_24_25 } from '../../constants/index';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

import HatkarSir from "../../img/HatkarSir.jpg";
import IGavakhore from "../../img/DirectoR1.jpeg";
import Secretary from "../../img/team2023_2024/_2SHARVARI-MILIND-SALODKAR.webp";

gsap.registerPlugin(ScrollTrigger); // Register the ScrollTrigger plugin

const TeamCards = (props) => {
    const { post, members } = props.item;
    return (
        <>
            <div className="relative w-[95%] mx-auto my-4 border-2 h-5/6 nav-light-shadows rounded-xl">
                {/* top div */}
                <h2 className="pt-4 text-3xl text-center text-black">{post}</h2>
                <div className="flex flex-col w-[95%] justify-evenly items-center mx-auto mb-4 mt-4 sm:flex-row flex-wrap">

                    {
                        members.map((people, index) => {
                            const { name, imageLink, phoneNo, emailId, linkedinId, title } = people;
                            return (
                                <div className='sm:w-[345px] w-[90%] my-4 nav-light-shadows rounded-2xl our_team_divs' key={index + Math.random()}>
                                    <div options={{
                                        max: 45,
                                        scale: 1,
                                        speed: 450
                                    }}
                                        className='flex flex-col items-center justify-center h-full rounded-2xl'
                                    >
                                        <div css={css`
                                                position: relative;
                                                width: 100%;
                                                height: 230px;
                                                top:0px;
                                                overflow: hidden;
                                                &:before{
                                                    content: '';
                                                    position: absolute;
                                                    top: 0;
                                                    left: 0;
                                                    width: 100%;
                                                    height: 200px;
                                                    background-image: url(${Secretary});
                                                    filter: blur(70px);
                                                    background-size: cover;
                                                    background-position: center;
                                                    transition: 0.5s;
                                            `}

                                            // background-image: url(${imageLink});
                                            //  filter: blur(25px);

                                            className="flex-col items-center justify-center w-[50%] h-[100%] rounded-t-2xl"
                                        >
                                            {/* div for intro  */}
                                            {/* <IconDiamond className=" flex-col items-center justify-center w-[50%] h-[100%] rounded-t-2xl"> */}
                                            <img src={imageLink} alt={name} className="w-[40%] rounded-full text-center absolute mx-auto nav-darker-shadows top-[22px] left-[29%]" />
                                            <div className="absolute bottom-0 z-20 flex flex-col items-center justify-center w-full text-center ">
                                                <h3 className='w-full mx-4 text-xl font-bold text-center text-black'>{name}</h3>
                                                <p className="text-center text-gray-600">{title}</p>
                                            </div>
                                            {/* </IconDiamond> */}
                                        </div>

                                        {/* div for contacts */}
                                        <div className="flex items-center justify-center w-full h-[50%] bg-[#eff6ff]">
                                            <div className="flex-col items-center justify-center">
                                                <p className="w-full p-2 m-2 text-center border-2 hover:cursor-pointer hover:bg-blue-400 rounded-xl"><a href={`mailto:${emailId}`} >{emailId} | <FontAwesomeIcon icon={faEnvelope} /></a></p>
                                                <p className="w-full p-2 m-2 text-center border-2 hover:bg-blue-400 rounded-xl hover:cursor-pointer"><a href={`tel:${phoneNo}`}>{phoneNo} | <FontAwesomeIcon icon={faPhone} /></a></p>
                                                <p className="w-full p-2 m-2 text-center border-2 hover:bg-blue-400 rounded-xl hover:cursor-pointer"><a href={linkedinId}>Linkedin | <FontAwesomeIcon icon={faLinkedinIn} /></a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export const OurTeam = () => {

    const comp = useRef();
    useLayoutEffect(() => {
        // let ctx = gsap.context(() => {
        //     const boxes = gsap.utils.toArray('.our_team_divs');
        //     boxes.forEach((box, index) => {
        //         gsap.from(box, {
        //             x: -300,
        //             opacity: 0,
        //             duration: 1.5,
        //             scrollTrigger: {
        //                 trigger: box,
        //                 start: "-20% 90%",
        //                 toggleActions: "play none none none",
        //             }
        //         })
        //     });
        // }, comp);

        // return () => {
        //     ctx.revert();
        // }

    }, []);


    useEffect(() => {
        document.title = "Our Team | SGGS Training & Placement";
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <motion.div variants={
                fadeIn("up", "", 0.1, 1)
            }
            >
                <div className="relative w-full mx-auto bg-blue-50 h-5/6">
                    {/* top div */}
                    <h2 className="pt-4 text-3xl text-center text-black">Director & TPO Head</h2>
                    <div className="flex flex-col w-[90%] justify-evenly items-center mx-auto mb-4 mt-4 sm:flex-row ">
                        <div className='sm:w-[345px] w-[80%] my-4 nav-light-shadows rounded-2xl'>
                            <div options={{
                                max: 45,
                                scale: 1,
                                speed: 450
                            }}
                                className='flex flex-col items-center justify-center rounded-2xl h-96'
                            >
                                {/* div for intro  */}

                                <div className="absolute flex-col items-center justify-center w-[50%] h-[100%] bg-img-blured-assis rounded-t-2xl" >
                                    <img src={IGavakhore} alt="HatkarSir" className="w-[40%] rounded-full text-center z-10 absolute mx-auto nav-darker-shadows top-[22px] left-[29%]" />
                                    <div className="absolute bottom-0 z-20 flex flex-col items-center justify-center w-full text-center">
                                        <h3 className='mx-2 text-2xl font-bold text-black'>Dr. M.B.Kokare</h3>
                                        <p className="text-gray-600">Director</p>
                                    </div>
                                </div>

                                {/* div for contacts */}
                                <div className="flex items-center justify-center w-full h-[40%]">
                                    <div className="flex-col items-center justify-center">
                                        <p className="w-full p-2 m-2 text-center border-2 hover:cursor-pointer hover:bg-blue-400 rounded-xl"><a href={`mailto:director@sggs.ac.in`} >director@sggs.ac.in | <FontAwesomeIcon icon={faEnvelope} /></a></p>

                                        <p className="w-full p-2 m-2 text-center border-2 hover:bg-blue-400 rounded-xl hover:cursor-pointer"><a href={`tel:+91 9421474393`}>+91 9421474393 | <FontAwesomeIcon icon={faPhone} /></a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='sm:w-[345px] w-[80%] my-4 nav-light-shadows rounded-2xl our_team_divs'>
                            <div options={{
                                max: 45,
                                scale: 1,
                                speed: 450
                            }}
                                className='flex flex-col items-center justify-center rounded-2xl h-96'
                            >
                                {/* div for intro  */}

                                <div className="absolute flex-col items-center justify-center w-[50%] h-[100%] bg-img-blured rounded-t-2xl" >
                                    <img src={HatkarSir} alt="HatkarSir" className="w-[40%] rounded-full text-center z-10 absolute mx-auto nav-darker-shadows top-[22px] left-[29%]" />
                                    <div className="absolute bottom-0 z-20 flex flex-col items-center justify-center w-full text-center">
                                        <h3 className='mx-4 text-2xl font-bold text-black'>Prof. S.S.Hatkar</h3>
                                        <p className="text-gray-600">Dean (Industry Liaison), I/C TPO</p>
                                    </div>
                                </div>

                                {/* div for contacts */}
                                <div className="flex items-center justify-center w-full h-[40%]">
                                    <div className="flex-col items-center justify-center">
                                        <p className="w-full p-2 m-2 text-center border-2 hover:cursor-pointer hover:bg-blue-400 rounded-xl"><a href={`mailto:tpo@sggs.ac.in`} >tpo@sggs.ac.in | <FontAwesomeIcon icon={faEnvelope} /></a></p>
                                        <p className="w-full p-2 m-2 text-center border-2 hover:bg-blue-400 rounded-xl hover:cursor-pointer"><a href={`tel:+91-2462-269182`}>+91 94218 68526 | <FontAwesomeIcon icon={faPhone} /></a></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </motion.div>

            {/* Our Team */}
            <div ref={comp}>
                {team_24_25.map((items, index) => { return (<TeamCards key={`${index + Math.random()}` + items.post} index={index} item={items} />) })}
            </div>



        </>
    );
}
