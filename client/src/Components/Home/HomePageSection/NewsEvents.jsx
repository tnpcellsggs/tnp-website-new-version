import React, { useState, useEffect, useRef, useContext } from "react";
import axios from "axios";
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
  const marqueeRef = useRef(null);
  // using context api to save all the states & use it all over the app
  const newsContext = useContext(AdminContext);
  const [newsUpdates, setNewsUpdates] = useState([]);

  const { getAllNews } = newsContext;
  useEffect(() => {
    getAllNews().then((data) => {
      setNewsUpdates(data.reverse().slice(0, 3));
    });
  });

  return (
    <div className="sm:w-[50%] w-full p-2 m-2 align-top h-full">
      <h2 className="mx-2 text-2xl"><FontAwesomeIcon icon={faNewspaper} className="mx-2" />Updates</h2>
      <div className="flex-col items-start justify-start w-full mx-auto text-left align-middle sm:h-80" ref={marqueeRef}>
        {
          newsUpdates.reverse().map((data, index) => {
            return (
              <>
                <ul key={index} className="m-4">
                  <li><h3 className="text-base font-bold text-center text-red-700 hover:text-red-700 hover:underline sm:text-xl">{data.Title}</h3></li>
                  <li className="text-center">{data.Description}</li>
                  <li className="text-center">{data.Date}</li>
                </ul>
              </>
            );
          })
        }
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
        setEventsList(templist.slice(0, 4));
        setIsLoading(false);
      } catch (err) {
        console.log(err);
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
      <div className="flex flex-col items-center justify-center h-full m-2 nav-medium-light-shadows sm:flex-row">
        <NewsSection />
        <EventsSection />
      </div>
    </>
  )
}

export default SectionWrapper(NewsEvents, "");