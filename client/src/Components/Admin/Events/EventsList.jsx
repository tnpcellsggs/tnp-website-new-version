import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function EventsList() {
  const [eventsList, setEventsList] = useState([
    { uid: "-", recipent: "-", issued: 0, created: 0 },
  ]);
  const [isListRefreshing, setIsListRefreshing] = useState(false);
  const tableHeaders = ["Event Name", "Event Type", "Event Date", "Del"];

  useEffect(() => {
    const fetchEventList = async () => {
      try {
        let res = await axios.get(
          `${process.env.REACT_APP_REQURL}/admin/events/getall/`
        );
        setEventsList(res.data);
        // console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchEventList();
    setIsListRefreshing(false);
  }, [isListRefreshing]);

  const handleEventDelete = async (eventid) => {
    try {
      let res = await axios.post(
        `${process.env.REACT_APP_REQURL}/admin/events/delete/`,
        {
          eventid,
        }
      );
      res.status === 200 && setIsListRefreshing(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="cert-list" style={{ marginLeft: "80px" }}>
        <h4>Events List</h4>
        <table>
          <tbody>
            <tr>
              {tableHeaders.map((i) => {
                return <th>{i}</th>;
              })}
            </tr>
            {eventsList.map((i) => {
              return (
                <tr>
                  <td>{i.eventName}</td>
                  <td>{i.eventType}</td>
                  <td>
                    {i.eventDate
                      ? new Date(i.eventDate).toLocaleDateString("en-gb", {
                          weekday: "long",
                          year: "numeric",
                          month: "numeric",
                          day: "numeric",
                        })
                      : "-"}
                  </td>
                  <td>
                    <FontAwesomeIcon
                      icon={faTrash}
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        handleEventDelete(i._id);
                      }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button
          onClick={() => {
            setIsListRefreshing(true);
          }}
        >
          Refresh List
        </button>
      </div>
    </>
  );
}
