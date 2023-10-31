import React, { useEffect } from "react";
import 'react-vertical-timeline-component/style.min.css';
import { recruitment_procedures_list } from '../../../constants/index';
import SectionWrapper from "../../../Higher_Order_Components/SectionWrapper";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import { Container, Row, Col } from "react-bootstrap";

const DepartmentCards = (props) => {
  const { icon, name, link, info } = props.depts;
  const ind = props.index + 1;
  return (
    <>
      <VerticalTimelineElement
        contentStyle={{
          color: '#000',
          borderRadius: '20px',
          boxShadow: '1px 1px 10px #8f8f8f'
        }}
        contentArrowStyle={{
          borderRight: '7px solid #232631'
        }}
        // date={head}
        iconStyle={{
          background: '#383E56'
        }}
        icon={
          <div className='flex items-center justify-center w-full h-full '>
            <img src={icon} alt={name} className='w-[80%] h-[80%] object-contain rounded-full cursor-pointer' onClick={() => {
              window.open(link, "_blank");
            }} />

          </div>
        }
        className="rounded-lg"
      >
        <div className={`flex justify-center flex-col w-full h-full items-center`}>
          <h3 className='text-3xl font-bold text-center '>{name}</h3>
          <img src={icon} alt="" className="w-[40%] rounded-xl mt-4 ml-4 m-r mb-1 text-center" />
          <p className="text-center text-secondary "></p>
        </div>

        <ul className='flex items-center justify-center p-4 mt-1 text-center'>
          {
            info.map((point, index) => {
              return (
                <li key={index} className='text-black-100 font-bold text-[18px] pl-1 tracking-wider'>
                  <h2 className="m-4 text-white bg-red-600 rounded-xl">Step:- {ind}</h2>
                  {point}
                </li>
              )
            })}
        </ul>
      </VerticalTimelineElement>
    </>
  )
}

const Recruitment_Procedures = () => {
  useEffect(() => {
    document.title = "Recruitment Procedures | SGGS Training & Placement";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section id="features" className="features">
        <Container>
          <Row>
            <div className="w-[80%] mx-auto text-center flex flex-col justify-center items-center">
              <h2 className="my-2 text-4xl text-center">Our Recruitment Procedures</h2>
              <h3 className="p-4 my-2 text-xl text-left text-center border-2 rounded-lg nav-light-shadows ">The very first step for Recruitment Procedure is to Fill the JNF Direct Recruitment or Internship JNF/JAF Form. <br />
                &ldquo;Company needs to fill JNF form in order to recruit from SGGSIE&T.&ldquo; </h3>
            </div>
            <VerticalTimeline layout='1-column-left'>
              {
                recruitment_procedures_list.map((items, index) => {
                  return (
                    <DepartmentCards key={index} index={index} depts={items} />
                  )
                })
              }
            </VerticalTimeline>
          </Row>
        </Container>
      </section >
    </>
  );
}

export default SectionWrapper(Recruitment_Procedures, "");