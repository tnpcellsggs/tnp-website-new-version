import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import { past_recuriters_list } from '../../../constants/index';
import SectionWrapper from "../../../Higher_Order_Components/SectionWrapper";

const CompanySlider = () => {
    return (
        <>
            <div className='p-2 m-2 nav-medium-light-shadows'>
                <div className='flex flex-col items-center justify-between w-[80%] mx-auto text-center sm:flex-row'>
                    <h2 className='"p-2 text-3xl text-left text-center sm:text-4xl sm:p-4'>Our Hiring Partners</h2>
                    <p className='p-2 m-2 text-sm bg-gray-200 border-2 border-black rounded-xl hover:cursor-pointer'><Link to='/past_recruiters' className='font-bold'>See All</Link></p>
                </div>
                <div className='my-4 text-center w-[95%] mx-auto '>
                    <Marquee className='h-[20%] w-full' speed={150}>
                        {
                            past_recuriters_list.map((items, index) => {
                                return (
                                    <>
                                        <div className='flex items-center justify-center h-full mx-4 w-28' key={index}>
                                            <img src={items.imageLink} alt={items.title} className='w-[100%] h-full object-cover' />
                                        </div>
                                    </>
                                )
                            })
                        }
                    </Marquee>
                </div>
            </div>
        </>
    )
}

export default SectionWrapper(CompanySlider, "");
