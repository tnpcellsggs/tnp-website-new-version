import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
// import {news_list} from '../../../constants/index';
import { Link } from 'react-router-dom';
import Loading from "../../Utilities/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionWrapper from "../../../Higher_Order_Components/SectionWrapper";
import {
  faNewspaper, faCalendarDays
} from "@fortawesome/free-solid-svg-icons";
import { AdminContext } from "../../../App";
// import EUpcoming from "./EUpcoming";
// import { gsap } from 'gsap';
// import { news_list } from '../../../constants/index';

const NewsSection = () => {
  // const marqueeRef = useRef(null);
  // using context api to save all the states & use it all over the app
  const newsContext = useContext(AdminContext);
  const [newsUpdates, setNewsUpdates] = useState([]);
  const { getAllNews } = newsContext;
  const [animateElements, setanimateElements] = useState(null);

  useEffect(() => {
    getAllNews().then((data) => {
      setNewsUpdates(data.reverse());
    });

    setanimateElements(document.querySelectorAll('.news-items'));
  }, []);

  return (
    <div className="sm:w-[50%] w-full p-2 m-2 align-top h-full">
      <h2 className="mx-2 text-2xl"><FontAwesomeIcon icon={faNewspaper} className="mx-2" />Updates</h2>

      <div className="gallery">
        <div className="block-33 ">
          <div className="relative"
            onMouseOut={() => {
              animateElements.forEach((ele) => {
                ele.style.animationPlayState = 'running';
              })
            }}
            onMouseOver={() => {
              animateElements.forEach((ele) => {
                ele.style.animationPlayState = 'paused';
              });

            }}>

            <div className="news-items" >
              {
                newsUpdates.reverse().map((data, index) => {
                  // console.log(data.ImageLink);
                  // newsUpdates.reverse().map((data, index) => {
                  return (
                    <div key={index + data.Date + Math.random()} className="relative gallery-image">
                      <div className="gallery-image__img">
                        <div className=" fill-dimensions" >
                          <a href={data.ImagLink} className="hover:cursor-pointer" target='_blank'>
                            <ul key={index} >
                              <li className=""><h3 className="text-base font-bold text-center text-red-700 hover:text-red-700 hover:underline sm:text-xl">{data.Title}</h3></li>
                              <li className="text-center">{data.Description}</li>
                              <li className="text-center">{data.Date}</li>
                              {/* <li className="text-center">{data.news}</li>
                              <li className="text-center">{data.dates}</li> */}
                            </ul>
                          </a>

                        </div>
                      </div>
                    </div>

                  );
                })
              }

            </div>


            {/* 2nd  */}
            <div className="news-items" >
              {
                newsUpdates.map((data, index) => {
                  // newsUpdates.reverse().map((data, index) => {
                  return (

                    <div key={index + Math.random() + data.Date} className="relative gallery-image">
                      <div className="gallery-image__img">
                        <div className="fill-dimensions" >
                          <a href={data.ImagLink} className="hover:cursor-pointer" target='_blank'>
                            <ul key={index} >
                              <li className=""><h3 className="text-base font-bold text-center text-red-700 hover:text-red-700 hover:underline sm:text-xl">{data.Title}</h3></li>
                              <li className="text-center">{data.Description}</li>
                              <li className="text-center">{data.Date}</li>
                              {/* <li className="text-center">{data.news}</li>
                              <li className="text-center">{data.dates}</li> */}
                            </ul>
                          </a>
                        </div>
                      </div>
                    </div>

                  );
                })
              }

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

const EventsSection = () => {
  const [eventsList, setEventsList] = useState([
    { uid: "-", recipent: "-", issued: 0, created: 0 },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchEventList = async () => {
      setIsLoading(true);
      try {
        let res = await axios.get(
          `${process.env.REACT_APP_REQURL}/admin/events/getall/`
        );
        let templist = res.data;
        templist.sort((a, b) => b.eventDate.localeCompare(a.eventDate));
        setEventsList(templist.slice(0, 3));
        setIsLoading(false);
      } catch (err) {
        // console.log(err);
        setIsLoading(false);
      }
    };
    fetchEventList();
    // console.log(process.env.REACT_APP_REQURL)
  }, []);
  return (
    <>
      <div className="sm:w-[50%] w-full p-2 m-2 h-full ">
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <h2 className="mx-2 text-2xl align-top"><FontAwesomeIcon icon={faCalendarDays} className="mx-2" />Events & Workshops</h2>
          <p className='p-2 m-2 text-sm border-2 border-black rounded-xl hover:cursor-pointer'><Link to='/eventsPage' className='font-bold'>See All</Link></p>
        </div>
        {isLoading ? (<Loading size="80" width="10" speed="1" />) : (
          <div className="flex-col items-center justify-center w-full h-full align-middle sm:h-80">
            {
              eventsList.map((items, index) => {
                return (
                  <div className='flex-col items-start justify-center m-4 sm:m-1' key={index}>
                    <h3 className="">{items.eventName}</h3>
                    <p className="">{items.eventOrg} <span className="font-bold text-red-700 hover:underline hover:text-red-700">Dt:{items.eventDate !== undefined ? items.eventDate.slice(0, 10) : ''}</span></p>

                    {/* <span><Link to='/studentSection' className='font-bold text-red-700 hover:underline hover:text-red-700'>(See Details)</Link></span>  */}
                  </div>
                )
              })
            }
          </div>
        )}
      </div>
    </>
  )
}

const NewsEvents = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-full m-2 nav-light-shadows sm:flex-row">
        <NewsSection />
        <EventsSection />
      </div>
    </>
  )
}

export default SectionWrapper(NewsEvents, "");