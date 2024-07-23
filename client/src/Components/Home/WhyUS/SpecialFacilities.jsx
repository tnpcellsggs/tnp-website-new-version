import React, { useRef,useEffect } from 'react';
import { gsap } from "gsap";
import { useLayoutEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { specialFacilities } from "../../../constants/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionWrapper from "../../../Higher_Order_Components/SectionWrapper";
import {
  faInstagram,
  faLinkedinIn,
  faSquareXTwitter
} from "@fortawesome/free-brands-svg-icons";

gsap.registerPlugin(ScrollTrigger); // Register the ScrollTrigger plugin

const SpecialFacilitiesCards = (props) => {
  const { title, imageLink, link, points } = props.item;
  const index = props.index;
  return (
    <>
      <div className="mx-2 sm:mx-4 my-14 nav-light-shadows gsap-divs" style={{ opacity: '1 !important', transform: 'none' }} >

        {/* top div */}
        <div className={`flex flex-col items-center justify-between m-4 sm:${index % 2 !== 0 ? 'flex-row-reverse' : 'flex-row'}`}>
          <div className={`w-full sm:w-[50%]`}>
            <a href={link}>
              <h2 className="p-2 text-3xl text-center sm:text-4xl sm:p-4">{title}</h2>
            </a>
          </div>
          {/* <ul className={`p-2 sm:p-4 w-full sm:w-[50%]`}> */}
          <ul className='flex items-center justify-center p-2 sm:p-4 '>
            <li className="inline-block p-2 m-2 rounded-lg hover:cursor-pointer"><a rel="noreferrer" target='_blank' href='https://twitter.com/tnp_sggsiet'><FontAwesomeIcon icon={faSquareXTwitter} className="w-[100%]"  /> </a></li>
            <li className="inline-block p-2 m-2 rounded-lg hover:cursor-pointer"><a rel="noreferrer" target='_blank' href='https://www.linkedin.com/in/sggs-tnpcell/'><FontAwesomeIcon color="#000" className="w-[100%]" icon={faLinkedinIn} /></a></li>
            <li className="inline-block p-2 m-2 rounded-lg hover:cursor-pointer"><a rel="noreferrer" target='_blank' href='https://www.instagram.com/tnp_sggsiet/'><FontAwesomeIcon color="#000" className="w-[100%]" icon={faInstagram} /></a></li>
          </ul>
        </div>

        {/* below div */}
        <div className={`flex flex-col items-center justify-center sm:${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
          <div className="sm:w-[60%] w-[80%] text-center flex justify-center flex-col items-center">
            <a href={link} className='flex items-center justify-center p-2 mt-2 mb-4'>
              <img src={imageLink} alt={title} className="w-full rounded-xl hover:scale-110 " />
            </a>
          </div>
          <ul className='w-[80%] px-4 mx-3 mb-4 space-y-2 list-disc'>
            {
              points.map((point, index) => {
                return (<li
                  key={`experience-point${index}`}
                  className={`md:text-[12px] text-[12px] lg:text-[16px] pl-1 font-normal w-[100%] text-justify`}
                >
                  {point}
                </li>)

              })}
          </ul>
        </div>
      </div >
    </>
  )
}

const SpecialFacilities = () => {

  const comp = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const boxes = gsap.utils.toArray('.gsap-divs');
      boxes.forEach((box, index) => {

        // console.log(index);
        gsap.from(box, {
          x: `${index % 2 === 0 ? 300 : -300}`,
          opacity: 0,
          duration: 1.5,
          scrollTrigger: {
            trigger: box,
            start: "top 70%",
            toggleActions: "play none none none",
            // markers: true,
          }
        })
      });
    }, comp);

    return () => {
      ctx.revert();
    }

  }, []);

  useEffect(() => {
    document.title = "Special Facilities | SGGS Training & Placement";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className='w-full mx-auto mt-2'>

        <h1 className='text-3xl'>&ldquo;Explore Special Facilities At SGGSIE&T&ldquo;</h1>
        <p className={`py-2 text-xl sm:text-2xl text-left `}>Overview.</p>

      </div>
      <div ref={comp}>
        {
          specialFacilities.map((service, index) => (
            (
              <SpecialFacilitiesCards key={service.title} index={index} item={service} />
            )
          ))
        }
      </div>
    </>
  )
}

export default SectionWrapper(SpecialFacilities, "");
