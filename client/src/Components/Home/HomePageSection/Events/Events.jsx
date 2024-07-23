import React, { useState, useEffect } from "react";
import Loading from "../../../Utilities/Loading";
// import EUpcoming from "./EUpcoming";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function EPast(props) {
  let string;
  try{
    string = props.imageLink.split('.com/uc')
    string = string[0] + '.com/thumbnail' + string[1] + '&sz=w1000'
    // console.log(props.imageLink)
  }
  catch(err){

  }

  console.log(props.imageLink);
  return (
    <>
      <div className="w-[90%] mx-auto h-[1px] bg-gray-300"></div>
      <div
        className={
          props.type === "drive" ? "past-container pe-drive" : "past-container"
        }
      >
        <div className="w-[90%] mx-auto border-2 m-4 rounded-b-[22px] sm:rounded-r-[22px] flex flex-col sm:flex-row">
          {/* left for image */}
          <div className="h-full w-full sm:w-[40%] flex items-center ">
            <a href={props.videoLink} target='_blank'>
              {/* <img src='https://th.bing.com/th/id/R.06d12fb83f5b23a7aa0b6a6b7c72f132?rik=NhlshKX6Rm%2fLfw&riu=http%3a%2f%2fwww.cameraegg.org%2fwp-content%2fuploads%2f2015%2f03%2fNikon-D5500-sample-images-2.jpg&ehk=8pJQWxg7OPyS%2fqUkwK4oROW5LajqA4NgCbbLWeCRo7g%3d&risl=&pid=ImgRaw&r=0' alt={props.name} className="h-auto max-h-full" /> */}
              <img src={string} alt={props.name} className="w-full h-auto max-h-full auto" />
            </a>
          </div>

          {/* right section for description */}
          <div className="w-full sm:w-[60%] h-full min-h-full flex flex-col p-2">
            <div className="flex flex-col justify-between items-left ">
              <p className="p-1 m-1 font-bold text-justify md:text-2xl text-[16px] lg:text-2xl" >{props.name}</p>
              <p className="p-1 m-1 font-bold text-justify md:text-[14px] text-[12px] lg:text-[18px]" >Date: {props.date}</p>
            </div>
            <div className="flex flex-col items-left ">
              <p className="p-2 m-1 font-bold text-justify md:text-[14px] text-[12px] lg:text-[16px]">Speaker: {props.org}</p>
              <p className="p-2 m-1 font-bold text-justify md:text-[14px] text-[12px] lg:text-[16px]">Description: {props.desc}</p>
            </div>

            <a href={props.videoLink} target='_blank'>
              <div className="p-1 m-1 font-bold text-center text-white border-1 border-black hover:cursor-pointer bg-[#207be2] w-[80%] md:w-[30%] sm:w-[30%] sm:m-4">
                Watch Now <FontAwesomeIcon icon={faPlay} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function Events() {
  const [eventsList, setEventsList] = useState([
    { uid: "-", recipent: "-", issued: 0, created: 0 },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.title = "Events | SGGS Training & Placement";
    window.scrollTo(0, 0);

    const fetchEventList = async () => {
      setIsLoading(true);
      try {
        let res = await axios.get(
          `${process.env.REACT_APP_REQURL}/admin/events/getall/`
        );
        let templist = res.data;
        templist.sort((a, b) => b.eventDate.localeCompare(a.eventDate));
        setEventsList(templist.slice(0, 10));
        setIsLoading(false);
        // console.log(templist)
      } catch (err) {
        // console.log(err);
        setIsLoading(false);
      }
    };
    fetchEventList();
    // console.log(eventsList);
  }, []);

  return (
    <>


      <div className='w-[90%] mx-auto mt-4'>
        <h1 className='text-3xl'>&ldquo;See the Past Events And Workshops At SGGSIE&T&ldquo;</h1>
        <p className={`py-2 text-xl sm:text-2xl text-left `}>Overview.</p>
      </div>

      {/* sample event card*/}


      {isLoading ? (
        <Loading size="80" width="10" speed="0.5" />
      ) : (
        <div>

          {eventsList.map((i) => {
            return (

              <EPast key={i.eventDate}
                dataKey={i._id}
                name={i.eventName}
                org={i.eventOrg}
                desc={i.eventDesc}
                type={i.eventType}
                videoLink={i.eventVideoLink}
                imageLink={i.eventImageLink}
                date={
                  i.eventDate
                    ? new Date(i.eventDate).toLocaleDateString("en-gb", {
                      weekday: "long",
                      year: "numeric",
                      month: "numeric",
                      day: "numeric",
                    })
                    : "-"
                }
              >
                {/* <img src="../../img/bg.png" alt="" /> */}
              </EPast>

            );
          })}
        </div>
      )}
    </>
  );
}

export default Events;
