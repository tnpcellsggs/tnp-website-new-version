import React, { useRef,useEffect } from "react";
import { gsap } from "gsap";
import { Tilt } from 'react-tilt';
import { useLayoutEffect } from 'react';
import { Container, Row } from "react-bootstrap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { past_recuriters_list } from '../../../constants/index';
import SectionWrapper from "../../../Higher_Order_Components/SectionWrapper";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

gsap.registerPlugin(ScrollTrigger); // Register the ScrollTrigger plugin

const Past_Recruiters_Cards = (props) => {
  const { title, imageLink } = props.item;
  // const index = props.index;
  return (
    <>
      <Tilt className='xs:w-[200px] mx-auto w-full m-4 past_rec_divs'>
        <div options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
          className=' rounded-[20px] p-4 min-h-[300px] flex justify-evenly items-center flex-col nav-light-shadows '
        >
          <img src={imageLink} alt="" className='w-[100%] h-full object contain' />
          <h3 className='text-[24px] font-bold text-center my-4'>{title}</h3>
        </div>


      </Tilt>
    </>
  )
}

const PastRecruiters = () => {
  const comp = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const boxes = gsap.utils.toArray('.past_rec_divs');
      boxes.forEach((box, index) => {

        console.log(index);
        gsap.from(box, {
          y: 300,
          opacity: 0,
          duration: 1.5,
          scrollTrigger: {
            trigger: box,
            start: "-20% 90%",
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
    document.title = "Past Reruiters | SGGS Training & Placement";
    window.scrollTo(0,0);
}, []);

  return (
    <>
      <section id="features" className="features">
        <Container>
          <Row>
            <div className="w-[80%] mx-auto text-center flex flex-col justify-center items-center">
              <h1 className="text-3xl text-center">Our Placement Partners</h1>
              <h3 className="p-4 mx-4 my-8 text-xl text-center border-2 rounded-lg nav-light-shadows w-[100%]">&ldquo;Your Path to Success Starts with Our Placement Alliances&rdquo;</h3>
            </div>

            <div ref={comp} className="grid items-center justify-center grid-cols-1 gap-2 sm:grid-cols-4 ">
              {
                past_recuriters_list.map((items, index) => {
                  return (
                    <Past_Recruiters_Cards key={index} index={index} item={items} />
                  )
                })
              }
            </div>
          </Row>
        </Container>
      </section >
    </>
  );
}

export default SectionWrapper(PastRecruiters, "");