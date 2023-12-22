import React, { useState, useEffect, useRef } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrash
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function EventsList() {
  const [eventsList, setEventsList] = useState([
    { uid: "-", recipent: "-", issued: 0, created: 0 },
  ]);
  const [isListRefreshing, setIsListRefreshing] = useState(false);
  const tableHeaders = ["Event Name", "Event Type", "Event Date", "Edit", "Delete"];

  // use ref to target a element
  let launch = useRef();

  const [eventData, setEventData] = useState({
    eventName: "",
    eventType: '',
    eventOrg: '',
    eventDesc: '',
    eventDate: '',
    eventVideoLink: '',
    eventImageLink: "",
    eventId: ""
  });

  const refreshPage = async () => {
    const fetchEventList = async () => {
      try {
        // let res = await axios.get(
        //   `${process.env.REACT_APP_REQURL}/admin/events/getall/`
        // );
        let res = await axios.get(`http://localhost:4019/admin/events/getall`);
        setEventsList(res.data);
      } catch (err) {
        // console.log(err);
      }
    };
    fetchEventList();
    setIsListRefreshing(false);
  }
  const onChange = (event) => {
    setEventData({
      ...eventData,
      [event.target.getAttribute('name')]: event.target.value
    });
  }
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  }
  const handleShow = () => {
    setShow(true);
  }
  useEffect(() => {
    const fetchEventList = async () => {
      try {
        // let res = await axios.get(`http://localhost:4019/admin/events/getall`);
        let res = await axios.get(`${process.env.REACT_APP_REQURL}/admin/events/getall`);
        setEventsList(res.data);
        // console.log(res.data);
      } catch (err) {
        // console.log(err);
      }
    };
    fetchEventList();
    setIsListRefreshing(false);
  }, []);

  const handleEventDelete = async (event) => {
    try {
      let res = await axios.delete(`${process.env.REACT_APP_REQURL}/admin/events/delete`,{
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          event:event
        }});
      // let res = await axios.delete(`http://localhost:4019/admin/events/delete`,{
      //   headers: {
      //     "Content-Type": "application/json"
      //   },
      //   data: {
      //     event:event
      //   }});
      res.status === 200 && setIsListRefreshing(true);
    } catch (err) {
      // console.log(err);
    }
  };

  const handleEventEdit = async () => {
    try {
      setShow(false);
      // let res = await axios.put(`http://localhost:4019/admin/events/editEvent`, eventData);
      let res = await axios.put(`${process.env.REACT_APP_REQURL}/admin/events/editEvent`, eventData);
      res.status === 200 && setIsListRefreshing(true);
    } catch (err) {
      // console.log(err);
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
                      icon={faPenToSquare}
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        launch.current.click();
                        setEventData(i);
                      }}
                    />
                  </td>
                  <td>
                    <FontAwesomeIcon
                      icon={faTrash}
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        handleEventDelete(i);
                      }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button
          // ref={btnRef}
          onClick={() => {
            refreshPage();
            setIsListRefreshing(true);
          }}
        >
          Refresh List
        </button>
      </div>

      <Button ref={launch} style={{ display: "none" }} variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit the Record</Modal.Title></Modal.Header>
        <Form.Text className="container text-muted">
          Previous Records are given in light text
        </Form.Text>
        <Modal.Body>
          <Form>
            <Form.Group className="container my-3 mb-3" controlId="eventName">
              <Form.Label>Event Name</Form.Label>
              <Form.Control className="inpts" onChange={onChange} type="text" placeholder={`${eventData.eventName}`} name="eventName" />
            </Form.Group>

            <Form.Group className="container my-3 mb-3" controlId="eventType">
              <Form.Label>Event Type</Form.Label>
              <Form.Control className="inpts" onChange={onChange} type="text" placeholder={`${eventData.eventType}`} name="eventType" />
            </Form.Group>
            <Form.Group className="container my-3 mb-3" controlId="eventOrg">
              <Form.Label>Event Org</Form.Label>
              <Form.Control className="inpts" onChange={onChange} type="text" placeholder={`${eventData.eventOrg}`} name="eventOrg" />
            </Form.Group>
            <Form.Group className="container my-3 mb-3" controlId="eventDesc">
              <Form.Label>Event Desc</Form.Label>
              <Form.Control className="inpts" onChange={onChange} type="text" placeholder={`${eventData.eventDesc}`} name="eventDesc" />
            </Form.Group>
            <Form.Group className="container my-3 mb-3" controlId="eventDate">
              <Form.Label>Event Date</Form.Label>
              <Form.Control className="inpts" onChange={onChange} type="date" placeholder={`${eventData.eventDate}`} name="eventDate" />
            </Form.Group>
            <Form.Group className="container my-3 mb-3" controlId="eventVideoLink">
              <Form.Label>Event Video Link</Form.Label>
              <Form.Control className="inpts" onChange={onChange} type="text" placeholder={`${eventData.eventVideoLink}`} name="eventVideoLink" />
            </Form.Group>
            <Form.Group className="container my-3 mb-3" controlId="eventImageLink">
              <Form.Label>Event Image Link</Form.Label>
              <Form.Control className="inpts" onChange={onChange} type="text" placeholder={`${eventData.eventImageLink}`} name="eventImageLink" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className='b-end-btn-gray' onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" className='b-end-btn-blue' onClick={handleEventEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  );
}
