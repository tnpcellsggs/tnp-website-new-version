import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import {hierarchyImages} from "../../../constants/index.js"
import 'react-vertical-timeline-component/style.min.css';
import { teamHierarchy } from '../../../constants/index';
import SectionWrapper from "../../../Higher_Order_Components/SectionWrapper";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';


const TeamStructureCards = (props) => {
    const { title, imgLink1, imgLink2, content, skills } = props.depts;
    let index = props.index;
    // const index = props.index;
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
                        <img src={imgLink1} alt={title} className='w-[80%] h-[80%] object-contain rounded-full cursor-pointer' />

                    </div>
                }
                className="w-full rounded-lg"
            >
                <div className={`flex flex-col items-center justify-between ${index%2===0?'sm:flex-row':'sm:flex-row-reverse'}`}>
                    {/* for left side image */}
                    <div className="h-full text-center md:w-[40%] sm:w-[30%] w-[100%]">
                        <img src={imgLink2} alt={title} className='w-full h-[80%] object-contain  cursor-pointer mx-auto ' />
                    </div>

                    {/* for right side content */}
                    <div className="sm:w-[70%] w-full md:w-[60%]">
                        {/* title */}
                        <h3 className="w-full m-2 mb-4 font-bold text-center md:text-[15px] text-xl lg:text-2xl sm:m-4">{title}</h3>
                        <ul className='m-4 space-y-2 list-disc sm:m-4'>
                            <span className="m-1 text-[12px] font-bold sm:text-[18px]">Our Responsibilities: </span>
                            {
                                content.map((point, index) => {
                                    return (
                                        <li
                                            key={index} className='text-black-100 md:text-[10px] text-[12px] lg:text-[16px] text-justify p-1 tracking-wider'
                                        >{point}
                                        </li>
                                    )
                                })}
                        </ul>
                        <ul className='m-4 space-y-2 list-disc sm:m-4'>
                        <span className="m-1 text-[14px] font-bold sm:text-[18px]">Skill Sets: </span>
                            {
                                skills.map((point, index) => {
                                    return (
                                        <li
                                            key={index} className='font-bold text-black-100 md:text-[12px] text-[12px] lg:text-[16px] pl-1 tracking-wider text-justify'
                                        >{point}
                                        </li>
                                    )
                                })}
                        </ul>

                    </div>
                </div>
            </VerticalTimelineElement>
        </>
    )
}

const TeamHierarchy = () => {
    useEffect(() => {
        document.title = "TeamHierarchy | SGGS Training & Placement";
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <section id="features" className="features">
                <Container>
                    <Row>
                        <div className="flex flex-col items-center justify-center w-[80%] mx-auto text-center">
                            <h1 className="text-3xl text-center">STRUCTURE OF TRAINING & PLACEMENT CELL</h1>
                            <h2 className="p-4 m-4 text-2xl text-center border-2 rounded-lg nav-light-shadows w-[100%]">&ldquo;Get to Know Team Hierarchy&ldquo;</h2>
                        </div>

                        <div className="w-[80%] mx-auto text-center sm:block hidden">
                           <img className="w-full" src={hierarchyImages[0].img} alt='windowImage' />
                        </div>

                        <div className="w-[80%] mx-auto text-center sm:hidden block">
                           <img className="w-full" src={hierarchyImages[1].img} alt='windowImage' />
                        </div>
                        <VerticalTimeline layout='1-column-left'>
                            {
                                teamHierarchy.map((items, index) => {
                                    return (
                                        <TeamStructureCards key={index} index={index} depts={items} />
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

export default SectionWrapper(TeamHierarchy, "");
