import React from 'react';
import Marquee from "react-fast-marquee";
// import LightBox from './LightBoc';
import SectionWrapper from "../../../Higher_Order_Components/SectionWrapper";

const Registration = () => {
    return (
        <>
            <div className="p-1 m-2 text-center nav-light-shadows reg_updates">
                {/* <LightBox /> */}
                <marquee scrollamount="5" width="80"><span>&lt;</span><span>&lt;</span><span>&lt;</span><span>&lt;</span><span>&lt;</span></marquee><a target='_blank' className='m-2' href="https://docs.google.com/forms/d/e/1FAIpQLSeKrOanttdGyuL6oNAKYLEv7RmHa8Dytuam12Q5UkBzICm_uw/viewform?pli=1"><h1 className="inline-block text-base font-bold text-center text-red-700 hover:text-red-700 hover:underline sm:text-xl md:text-base lg:text-2xl">Training and Placement Cell Interview Applications Are Open (Click Here To Register)</h1></a><marquee scrollamount="5" direction="right" width="80"><span>&gt;</span><span>&gt;</span><span>&gt;</span><span>&gt;</span><span>&gt;</span></marquee>
            </div>
        </>
    )
}

export default SectionWrapper(Registration, "");