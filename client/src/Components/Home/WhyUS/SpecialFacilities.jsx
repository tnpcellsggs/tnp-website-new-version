import React, { useRef,useEffect } from 'react';
import { gsap } from "gsap";
import { useLayoutEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { specialFacilities } from "../../../constants/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionWrapper from "../../../Higher_Order_Components/SectionWrapper";
import {
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

gsap.registerPlugin(ScrollTrigger); // Register the ScrollTrigger plugin

const SpecialFacilitiesCards = (props) => {
  const { title, imageLink, link, points } = props.item;
  const index = props.index;
  return (
    <>
      <div className="mx-4 my-14 nav-medium-light-shadows gsap-divs" style={{ opacity: '1 !important', transform: 'none' }} >
        {/* top div */}
        <div className={`flex flex-col items-center justify-between mx-2 mb-4 sm:${index % 2 !== 0 ? 'flex-row-reverse' : 'flex-row'}`}>
          <div className={`w-[50%]`}>
            <a href={link}>
              <h2 className="p-2 text-3xl text-center sm:text-right sm:text-4xl sm:p-4">
                {title}
              </h2>
            </a>
          </div>
          <ul className="flex items-center justify-center p-2 sm:p-4 w-[50%]">
            <li className="p-2 m-2 border-2 rounded-lg hover:cursor-pointer"><a rel="noreferrer" target='_blank' href='https://twitter.com/tnp_sggsiet'><FontAwesomeIcon color="#000" className="w-[100%]" icon={faTwitter} /></a></li>
            <li className="p-2 m-2 border-2 rounded-lg hover:cursor-pointer"><a rel="noreferrer" target='_blank' href='https://www.linkedin.com/in/sggs-tnpcell/'><FontAwesomeIcon color="#000" className="w-[100%]" icon={faLinkedinIn} /></a></li>
            <li className="p-2 m-2 border-2 rounded-lg hover:cursor-pointer"><a rel="noreferrer" target='_blank' href='https://www.instagram.com/tnp_sggsiet/'><FontAwesomeIcon color="#000" className="w-[100%]" icon={faInstagram} /></a></li>
          </ul>
        </div>

        {/* below div */}
        <div className={`flex flex-col items-center justify-center sm:${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
          <div className="sm:w-[60%] w-[80%] text-center flex justify-center flex-col items-center mb-4">
            <a href={link} className='flex items-center justify-center'>
              <img src={imageLink} alt={title} className="sm:w-[70%] h-[100%] mb-2 w-[100%] rounded-xl hover:scale-110 " />
            </a>
          </div>
          <ul className='mx-3 mb-4 space-y-2 list-disc sm:w-[60%] w-[90%] px-4'>
            {
              points.map((point, index) => {
                return (<li
                  key={`experience-point${index}`}
                  className={`text-[16px] pl-1 font-normal w-[100%]`}
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

        console.log(index);
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
      <div className='w-[97%] mx-auto'>

        <p className={`py-4 text-3xl sm:text-4xl text-left `}>&ldquo;Explore Special Facilities At SGGSIE&T&ldquo;</p>
        <h2 className='text-2xl'>Overview.</h2>

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
