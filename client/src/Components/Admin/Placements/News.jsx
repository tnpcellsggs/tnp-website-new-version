import React, { useEffect, useState, useContext, useRef } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPenToSquare,
    faTrash
} from "@fortawesome/free-solid-svg-icons";

// context api
import { AdminContext } from "../../../App";
export const News = () => {

    const newsData = useContext(AdminContext);
    const [newsUpdates, setNewsUpdates] = useState([]);
    const [recordData, setRecordData] = useState({
        Title: "",
        Description: "",
        Date: "",
        ImageLink: "",
        ID: "",
    });

    const { createNews, getAllNews, editNews, deleteNews } = newsData;

    // use ref to target a element
    let launch = useRef();
    let btnRef = useRef();

    const [prevId, setID] = useState(recordData);

    // state variables to toggle the modal
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => {
        setShow(true);
    }

    const handleSubmitEdit = () => {
        // console.log(prevId, recordData);
        editNews(prevId, recordData);
        setShow(false);
    }

    const refreshPage = async () => {
        btnRef.current.click();
        getAllNews().then((data) => {
            setNewsUpdates(data);
        });
    }

    const addARecord = (event) => {
        // stop the reloding of the page
        event.preventDefault();

        // add to the data base
        createNews(recordData);
        let ele = document.getElementsByClassName("inpts");
        Array.from(ele).forEach((item) => {
            item.value = null;
        });

    }
    const onChange = (event) => {
        setRecordData({
            ...recordData,
            [event.target.getAttribute('name')]: event.target.value
        });
    }
    useEffect(() => {
        // getAlldetails();
        getAllNews().then((data) => {
            setNewsUpdates(data);
        });
    }, []);
    return (
        <>
            {/* Modal to edit the data */}

            <Button ref={launch} style={{ display: "none" }} variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit the Record</Modal.Title></Modal.Header>
                <Form.Text className=" text-muted">
                    Previous Records are given in light text
                </Form.Text>
                <Modal.Body>
                    <Form>
                        <Form.Group className="my-3 mb-3 " controlId="Year">
                            <Form.Label>Title</Form.Label>
                            <Form.Control className="inpts" type="text" placeholder={`${recordData.Title}`} onChange={onChange} name="Title" />
                        </Form.Group>

                        <Form.Group className="my-3 mb-3 " controlId="Description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control className="inpts" type="text" onChange={onChange} placeholder={`${recordData.Description}`} name="Description" />
                        </Form.Group>
                        <Form.Group className="my-3 mb-3 " controlId="Date">
                            <Form.Label>Date</Form.Label>
                            <Form.Control className="inpts" type="text" onChange={onChange} placeholder={`${recordData.Date}`} name="Date" />
                        </Form.Group>
                        <Form.Group className="my-3 mb-3 " controlId="ImageLink">
                            <Form.Label>Image Link</Form.Label>
                            <Form.Control className="inpts" type="text" onChange={onChange} placeholder={`${recordData.ImageLink}`} name="ImageLink" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className='b-end-btn-gray' onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" className='b-end-btn-blue' onClick={handleSubmitEdit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>


            {/* Table which will be having all the data about the year wisw placement records */}
            <Table striped bordered hover className='w-[90%] mx-auto mt-4' responsive="lg" size="sm">
                <thead>
                    <tr style={{ textAlign: "center" }}>
                        {/* <th>Sr No.</th> */}
                        <th>Title</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Imp. Link</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        newsUpdates.reverse().map((data, index) => {
                            return (

                                <tr key={index + data.Date + Math.random()}>
                                    <td>{data.Title}</td>
                                    <td>{data.Description}</td>
                                    <td>{data.Date}</td>
                                    <td>{data.ImageLink}</td>
                                    <td><FontAwesomeIcon id={data.Title} className='icons' onClick={() => {
                                        launch.current.click();
                                        setRecordData(data);
                                        setID(data.ID);
                                    }} icon={faPenToSquare} /></td>
                                    <td><FontAwesomeIcon className='icons' onClick={() => {
                                        deleteNews({ ID: data.ID });
                                        refreshPage();
                                    }} id={data.Title} icon={faTrash} /></td>
                                </tr>

                            );
                        })

                    }
                </tbody>
                <div className="">
                    <Button ref={btnRef} Button variant="dark" className='my-3 justify-content-center md-3' onClick={refreshPage}>
                        Refresh
                    </Button>
                </div>
            </Table >

            {/* Form to add records */}
            <Form className='w-[90%] mx-auto' >
                <hr />
                <h2 className="my-3 ">Add News or Updates Here</h2>
                <Form.Group className="my-3 mb-3 " controlId="Year">
                    <Form.Label>Title</Form.Label>
                    <Form.Control className="inpts" type="text" placeholder="Campus Drive" onChange={onChange} name="Title" />
                </Form.Group>

                <Form.Group className="my-3 mb-3 " controlId="Description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control className="inpts" type="text" onChange={onChange} placeholder="Today there is a Campus Drive" name="Description" />
                </Form.Group>
                <Form.Group className="my-3 mb-3 " controlId="Date">
                    <Form.Label>Date</Form.Label>
                    <Form.Control className="inpts" type="text" onChange={onChange} placeholder="01/11/2023" name="Date" />
                </Form.Group>
                <Form.Group className="my-3 mb-3 " controlId="ImageLink">
                    <Form.Label>Imp Link(if any)</Form.Label>
                    <Form.Control className="inpts" type="text" onChange={onChange} placeholder="//drive.image/link" name="ImageLink" />
                </Form.Group>

                <Form.Group className="my-3 mb-3 " controlId="Submit">
                    <Button onClick={addARecord} className='b-end-btn-blue' variant="primary text-center" type="submit">
                        Add
                    </Button>
                </Form.Group>
            </Form >
        </>
    );
}