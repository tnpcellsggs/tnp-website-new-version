import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";

function EventsAdd() {

  const [eventAddError, setEventAddError] = useState();

  const [eventData, setEventData] = useState({
    eventName: "",
    eventType: '',
    eventOrg: '',
    eventDesc: '',
    eventDate: '',
    eventVideoLink: '',
    eventImageLink: "",
  });

  const onChange = (event) => {
    setEventData({
      ...eventData,
      [event.target.getAttribute('name')]: event.target.value
    });
  }
  const handleEventAdd = async (e) => {
    e.preventDefault();

    if (eventData.eventType === "" || eventData.eventType === "none") {
      setEventAddError("Please select event type.");
      return;
    }

    try {
      // let res = await axios.post(`http://localhost:4019/admin/events/create`, eventData);
      let res = await axios.post(`${process.env.REACT_APP_REQURL}/admin/events/create`, eventData);
      window.alert("Event Added.");
      let ele = document.getElementsByClassName("inpts");
      Array.from(ele).forEach((item) => {
        item.value = null;
      });
      res.status(200);
    } catch (err) {
      // console.log(err);
      setEventAddError("Error!");
    }
  };

  return (
    <>
      {/* <div className="event-add">
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
            Event Video Link:<span style={{ color: "#f00" }}>*</span>&nbsp;
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
      </div> */}


      <Form className="w-[90%] mx-auto">
        <hr />
        <h2 className="container my-3">Add Year Wise Records Here</h2>
        <Form.Group className="container my-3 mb-3" controlId="eventName">
          <Form.Label>Event Name</Form.Label>
          <Form.Control className="inpts" type="text" placeholder="e.g Workshop on Soft Skills" onChange={onChange} name="eventName" />
        </Form.Group>

        <Form.Group className="container my-3 mb-3" controlId="eventType">
          <Form.Label>Event Type</Form.Label>
          <Form.Control className="inpts" type="text" onChange={onChange} placeholder="e.g workshop or session" name="eventType" />
        </Form.Group>

        <Form.Group className="container my-3 mb-3" controlId="eventOrg">
          <Form.Label>Event Org</Form.Label>
          <Form.Control className="inpts" type="text" onChange={onChange} placeholder="Speaker" name="eventOrg" />
        </Form.Group>
        <Form.Group className="container my-3 mb-3" controlId="eventDesc">
          <Form.Label>Event Desc</Form.Label>
          <Form.Control className="inpts" type="textarea" onChange={onChange} placeholder="e.g Description" name="eventDesc" />
        </Form.Group>
        <Form.Group className="container my-3 mb-3" controlId="eventDate">
          <Form.Label>Event Date</Form.Label>
          <Form.Control className="inpts" type="date" onChange={onChange} placeholder="e.g 31/12/2023" name="eventDate" />
        </Form.Group>
        <Form.Group className="container my-3 mb-3" controlId="eventVideoLink">
          <Form.Label>Event Video Link</Form.Label>
          <Form.Control className="inpts" type="text" onChange={onChange} placeholder="e.g video link" name="eventVideoLink" />
        </Form.Group>
        <Form.Group className="container my-3 mb-3" controlId="eventImageLink">
          <Form.Label>Event Image Link</Form.Label>
          <Form.Control className="inpts" type="text" onChange={onChange} placeholder="e.g image link" name="eventImageLink" />
        </Form.Group>

        <Form.Group className="container my-3 mb-3" controlId="Submit">
          <Button onClick={handleEventAdd} className='b-end-btn-blue' variant="primary text-center" type="submit">Add</Button>
        </Form.Group>
      </Form >
    </>
  );
}

export default EventsAdd;
