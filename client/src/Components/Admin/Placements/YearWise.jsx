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
export const YearWise = () => {

    const yearWiseData = useContext(AdminContext);
    const [yearData, setYearData] = useState([]);
    const [recordData, setRecordData] = useState({
        Year: "",
        BTechOnRoll: 0,
        BTechPlaced: 0,
        MTechOnRoll: 0,
        MTechPlaced: 0,
        TotalPlaced: 0,
        AveragePackage: "",
        PackageRange: ""
    });

    const { getYearWiseAlldetails, createYearWiseRecord, editYearWiseRecord, deleteYearWiseRecord } = yearWiseData;

    // use ref to target a element
    let launch = useRef();
    let btnRef = useRef();

    // state variables to toggle the modal
    const [show, setShow] = useState(false);
    const [prevYear, setPrevYear] = useState(recordData);

    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => {
        setShow(true);
    }

    const handleSubmitEdit = () => {
        // console.log(prevYear, recordData);
        editYearWiseRecord(prevYear, recordData);
        setShow(false);
    }

    const refreshPage = async () => {
        btnRef.current.click();
        getYearWiseAlldetails().then((data) => {
            setYearData(data);
        });
    }

    const addARecord = (event) => {
        // stop the reloding of the page
        event.preventDefault();

        // add to the data base
        createYearWiseRecord(recordData);
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
        getYearWiseAlldetails().then((data) => {
            setYearData(data);
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
                <Form.Text className="container text-muted">
                    Previous Records are given in light text
                </Form.Text>
                <Modal.Body>
                    <Form>
                        <Form.Group className="container my-3 mb-3" controlId="Year">
                            <Form.Label>Year</Form.Label>
                            <Form.Control className="inpts" onChange={onChange} type="text" placeholder={`${recordData.Year}`} name="Year" />
                        </Form.Group>

                        <Form.Group className="container my-3 mb-3" controlId="BTechOnRoll">
                            <Form.Label>BTech On Roll</Form.Label>
                            <Form.Control className="inpts" onChange={onChange} type="number" placeholder={`${recordData.BTechOnRoll}`} name="BTechOnRoll" />
                        </Form.Group>
                        <Form.Group className="container my-3 mb-3" controlId="BTechPlaced">
                            <Form.Label>BTech Placed</Form.Label>
                            <Form.Control className="inpts" onChange={onChange} type="number" placeholder={`${recordData.BTechPlaced}`} name="BTechPlaced" />
                        </Form.Group>
                        <Form.Group className="container my-3 mb-3" controlId="MTechOnRoll">
                            <Form.Label>MTech On Roll</Form.Label>
                            <Form.Control className="inpts" onChange={onChange} type="number" placeholder={`${recordData.MTechOnRoll}`} name="MTechOnRoll" />
                        </Form.Group>
                        <Form.Group className="container my-3 mb-3" controlId="MTechPlaced">
                            <Form.Label>MTech Placed</Form.Label>
                            <Form.Control className="inpts" onChange={onChange} type="number" placeholder={`${recordData.MTechPlaced}`} name="MTechPlaced" />
                        </Form.Group>
                        <Form.Group className="container my-3 mb-3" controlId="TotalPlaced">
                            <Form.Label>Total Placed</Form.Label>
                            <Form.Control className="inpts" onChange={onChange} type="number" placeholder={`${recordData.TotalPlaced}`} name="TotalPlaced" />
                        </Form.Group>
                        <Form.Group className="container my-3 mb-3" controlId="AveragePackage">
                            <Form.Label>Average Package</Form.Label>
                            <Form.Control className="inpts" onChange={onChange} type="text" placeholder={`${recordData.AveragePackage}`} name="AveragePackage" />
                        </Form.Group>
                        <Form.Group className="container my-3 mb-3" controlId="PackageRange">
                            <Form.Label>Package Range</Form.Label>
                            <Form.Control className="inpts" onChange={onChange} type="text" placeholder={`${recordData.PackageRange}`} name="PackageRange" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className='b-end-btn-gray' onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary"  className='b-end-btn-blue' onClick={handleSubmitEdit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>


            {/* Table which will be having all the data about the year wisw placement records */}
            <Table striped bordered hover className='container my-3' responsive="lg" size="sm">
                <thead>
                    <tr style={{ textAlign: "center" }}>
                        {/* <th>Sr No.</th> */}
                        <th>Year</th>
                        <th>BTechOnRoll</th>
                        <th>BTechPlaced</th>
                        <th>MTechOnRoll</th>
                        <th>MTechPlaced</th>
                        <th>TotalPlaced</th>
                        <th>AveragePackage</th>
                        <th>PackageRange</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        yearData.reverse().map((data,index) => {
                            return (
                                <>
                                    <tr key={index}>
                                        <td>{data.Year}</td>
                                        <td>{data.BTechOnRoll}</td>
                                        <td>{data.BTechPlaced}</td>
                                        <td>{data.MTechOnRoll}</td>
                                        <td>{data.MTechPlaced}</td>
                                        <td>{data.TotalPlaced}</td>
                                        <td>{data.AveragePackage}</td>
                                        <td>{data.PackageRange}</td>
                                        <td><FontAwesomeIcon id={data.Year} className='icons' onClick={() => {
                                            launch.current.click();
                                            setRecordData(data);
                                            setPrevYear(data.Year);
                                        }} icon={faPenToSquare} /></td>
                                        <td><FontAwesomeIcon className='icons' onClick={() => {
                                            deleteYearWiseRecord({ Year: data.Year });
                                            refreshPage();
                                        }} id={data.Year} icon={faTrash} /></td>
                                    </tr>
                                </>
                            );
                        })

                    }
                </tbody>
                <div className="container">
                    <Button ref={btnRef} Button variant="dark" className='container my-3 justify-content-center md-3' onClick={refreshPage}>
                        Refresh
                    </Button>
                </div>
            </Table >

            {/* Form to add records */}
            <Form  >
                <hr />
                <h2 className="container my-3">Add Year Wise Records Here</h2>
                <Form.Group className="container my-3 mb-3" controlId="Year">
                    <Form.Label>Year</Form.Label>
                    <Form.Control className="inpts" type="text" placeholder="e.g 2023-24" onChange={onChange} name="Year" />
                </Form.Group>

                <Form.Group className="container my-3 mb-3" controlId="BTechOnRoll">
                    <Form.Label>BTech On Roll</Form.Label>
                    <Form.Control className="inpts" type="number" onChange={onChange} placeholder="e.g 412" name="BTechOnRoll" />
                </Form.Group>
                <Form.Group className="container my-3 mb-3" controlId="BTechPlaced">
                    <Form.Label>BTech Placed</Form.Label>
                    <Form.Control className="inpts" type="number" onChange={onChange} placeholder="e.g 123" name="BTechPlaced" />
                </Form.Group>
                <Form.Group className="container my-3 mb-3" controlId="MTechOnRoll">
                    <Form.Label>MTech On Roll</Form.Label>
                    <Form.Control className="inpts" type="number" onChange={onChange} placeholder="e.g 153" name="MTechOnRoll" />
                </Form.Group>
                <Form.Group className="container my-3 mb-3" controlId="MTechPlaced">
                    <Form.Label>MTech Placed</Form.Label>
                    <Form.Control className="inpts" type="number" onChange={onChange} placeholder="e.g 123" name="MTechPlaced" />
                </Form.Group>
                <Form.Group className="container my-3 mb-3" controlId="TotalPlaced">
                    <Form.Label>Total Placed</Form.Label>
                    <Form.Control className="inpts" type="number" onChange={onChange} placeholder="e.g 325" name="TotalPlaced" />
                </Form.Group>
                <Form.Group className="container my-3 mb-3" controlId="AveragePackage">
                    <Form.Label>Average Package</Form.Label>
                    <Form.Control className="inpts" type="text" onChange={onChange} placeholder="e.g 8.8 LPA" name="AveragePackage" />
                </Form.Group>
                <Form.Group className="container my-3 mb-3" controlId="PackageRange">
                    <Form.Label>Package Range</Form.Label>
                    <Form.Control className="inpts" type="text" onChange={onChange} placeholder="e.g 5.3 - 12+ LPA" name="PackageRange" />
                </Form.Group>

                <Form.Group className="container my-3 mb-3" controlId="Submit">
                    <Button onClick={addARecord} className='b-end-btn-blue' variant="primary text-center" type="submit">
                        Add
                    </Button>
                </Form.Group>
            </Form >
        </>
    );
}