import React, { useState, useEffect } from "react";
import axios from "axios";

function EventsAdd() {
  const [eventName, setEventName] = useState("");
  const [eventType, setEventType] = useState("");
  const [eventOrg, setEventOrg] = useState("");
  const [eventDesc, setEventDesc] = useState("");
  const [eventDate, setEventDate] = useState();
  const [eventAddError, setEventAddError] = useState();

  useEffect(() => {
    setEventType("none");
  }, []);

  const handleEventAdd = async (e) => {
    e.preventDefault();

    if (eventType == "" || eventType == "none") {
      setEventAddError("Please select event type.");
      return;
    }

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_REQURL}/admin/events/create/`,
        { eventName, eventOrg, eventType, eventDesc, eventDate }
      );
      window.alert("Event Added.");
      document.getElementById("eventaddform").reset();
    } catch (err) {
      console.log(err);
      setEventAddError("Error!");
    }
  };

  return (
    <>
      <div className="event-add">
        <h3>Add Event</h3>
        <form id="eventaddform" onSubmit={handleEventAdd}>
          <label>
            Event Name:<span style={{ color: "#f00" }}>*</span>&nbsp;
          </label>
          <input
            type="string"
            onChange={(event) => {
              setEventName(event.target.value);
            }}
            required
          />
          <br />
          <label>
            Event Type:<span style={{ color: "#f00" }}>*</span>&nbsp;
          </label>
          <select
            onChange={(event) => {
              setEventType(event.target.value);
            }}
          >
            <option value="none">--</option>
            <option value="drive">Placement Drive</option>
            <option value="workshop">Workshop</option>
          </select>
          <br />
          <label>Event Speaker/ Company:&nbsp;</label>
          <input
            type="text"
            onChange={(event) => {
              setEventOrg(event.target.value);
            }}
          />
          <br />
          <label>
            Event Description:<span style={{ color: "#f00" }}>*</span>&nbsp;
          </label>
          <textarea
            onChange={(event) => {
              setEventDesc(event.target.value);
            }}
            required
          />
          <br />
          <label>
            Event Date:<span style={{ color: "#f00" }}>*</span>&nbsp;
          </label>
          <input
            type="date"
            onChange={(event) => {
              setEventDate(event.target.value);
            }}
            required
          />
          <br />
          <p>{eventAddError}</p>
          <button type="submit">Add</button>
        </form>
      </div>
    </>
  );
}

export default EventsAdd;
