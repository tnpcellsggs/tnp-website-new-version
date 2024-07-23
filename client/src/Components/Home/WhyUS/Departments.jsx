import React,{useEffect} from "react";
import { Container, Row } from "react-bootstrap";
import 'react-vertical-timeline-component/style.min.css';
import { departmentDetails } from '../../../constants/index';
import SectionWrapper from "../../../Higher_Order_Components/SectionWrapper";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';


const DepartmentCards = (props) => {
  const { icon, name, link, info, head ,imageLink} = props.depts;
  // const index = props.index;
  return (
    <>
      <VerticalTimelineElement
        contentStyle={{
          color: '#000',
          borderRadius: '20px',
          boxShadow: '1px 1px 10px #cdcdcd'
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
          <h3 className='text-2xl font-bold text-center '><a className='text-center text-black' rel="noreferrer" target='_blank' href={link}>{name}</a></h3>
          {/* <img src={imageLink} alt="" className="w-[40%] rounded-full sm:w-[20%] m-4"/> */}
          <img src={imageLink} alt="department" className="rounded-xl w-[80%] mt-4 ml-4 m-r mb-1" />
          <p className="text-[18px] font-bold text-center">HOD: {head}</p>
        </div>

        <ul className='mt-2 ml-5 space-y-2 list-disc'>
          {
            info.map((point, index) => {
              return (
                <li
                  key={index} className='text-justify text-black-100 md:text-[12px] text-[12px] lg:text-[16px] pl-1 tracking-wider'
                >{point}
                </li>
              )
            })}
          {/* <p className={`text-secondary ${index % 2 !== 0 ? "text-left" : "text-right"} font-semibold text-[16px]`} style={{ margin: 0 }}>Since {dates}</p> */}
        </ul>
      </VerticalTimelineElement>
    </>
  )
}

const Departments = () => {
  useEffect(() => {
    document.title = "Departments | SGGS Training & Placement";
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section id="features" className="features">
        <Container>
          <Row>
            <div className="w-[80%] mx-auto text-center flex flex-col justify-center items-center">
              <h1 className="text-3xl text-center">Our Departments</h1>
              <h3 className="p-4 m-4 text-2xl text-center border-2 rounded-lg nav-light-shadows w-[100%]">&ldquo;Get to Know Our Academic Divisions&ldquo;</h3>
            </div>
            <VerticalTimeline>
              {
                departmentDetails.map((items, index) => {
                  return (
                    <DepartmentCards key={index} index={index} depts={items}></DepartmentCards>
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

export default SectionWrapper(Departments, "");

