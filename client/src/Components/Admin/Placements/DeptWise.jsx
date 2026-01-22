import React, { useEffect, useState, useContext, useRef, useCallback } from 'react'
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

export const DeptWise = () => {
    const deptWiseData = useContext(AdminContext);
    const [deptData, setDeptData] = useState([]);
    const [show, setShow] = useState(false);
    const [recordData, setRecordData] = useState({
        Year: "",
        Department: "",
        UndergradTotal: 0,
        UndergradPlaced: 0,
        PostgradTotal: 0,
        PostgradPlaced: 0
    });
    const [ID, setID] = useState({
        _id: ""
    });

    let launch = useRef();
    let btnRef = useRef();
    const { getDeptAlldetails, createDeptRecord, editDeptRecord, deleteDeptRecord } = deptWiseData;

    const addARecord = (event) => {
        // stop the reloding of the page
        event.preventDefault();

        createDeptRecord(recordData);
        let ele = document.getElementsByClassName("inpts");
        Array.from(ele).forEach((item) => {
            item.value = null;
        });
    }
    const onChange = (ele) => {
        setRecordData({
            ...recordData,
            [ele.target.name]: ele.target.value
        })
    }

    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => {
        setShow(true);
    }

    const handleSubmitEdit = () => {
        // console.log(ID, recordData);
        editDeptRecord(ID, recordData);
        setShow(false);
    }

    const refreshPage = async () => {
        btnRef.current.click();
        getDetails();
    }

    const getDetails = async () => {
        // getAlldetails();
        getDeptAlldetails().then((data) => {
            let info = data;
            info = info.sort((a, b) => {
                return (Number.parseInt(a._id.slice(3)) - Number.parseInt(b._id.slice(3)));
            }).reverse();
            setDeptData(info);
        });
    }

    useEffect(() => {
        getDetails();
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
                            <Form.Label>Year</Form.Label>
                            <Form.Control className="inpts" type="text" placeholder={`${recordData.Year}`} onChange={onChange} name="Year" />
                        </Form.Group>

                        <Form.Group className="my-3 mb-3 " controlId="Department">
                            <Form.Label>Department</Form.Label>
                            <Form.Control className="inpts" type="text" onChange={onChange} placeholder={`${recordData.Department}`} name="Department" />
                        </Form.Group>
                        <Form.Group className="my-3 mb-3 " controlId="UndergradTotal">
                            <Form.Label>Undergrad Total</Form.Label>
                            <Form.Control className="inpts" type="number" onChange={onChange} placeholder={`${recordData.UndergradTotal}`} name="UndergradTotal" />
                        </Form.Group>
                        <Form.Group className="my-3 mb-3 " controlId="UndergradPlaced">
                            <Form.Label>Undergrad Placed</Form.Label>
                            <Form.Control className="inpts" type="number" onChange={onChange} placeholder={`${recordData.UndergradPlaced}`} name="UndergradPlaced" />
                        </Form.Group>
                        <Form.Group className="my-3 mb-3 " controlId="PostgradTotal">
                            <Form.Label>Postgrad Total</Form.Label>
                            <Form.Control className="inpts" type="number" onChange={onChange} placeholder={`${recordData.PostgradTotal}`} name="PostgradTotal" />
                        </Form.Group>
                        <Form.Group className="my-3 mb-3 " controlId="PostgradPlaced">
                            <Form.Label>Postgrad Placed</Form.Label>
                            <Form.Control className="inpts" type="number" onChange={onChange} placeholder={`${recordData.PostgradPlaced}`} name="PostgradPlaced" />
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className="b-end-btn-gray" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" className="b-end-btn-blue" onClick={handleSubmitEdit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            <div className="p-3 w-[90%] mx-auto">
                <Button ref={btnRef} Button variant="dark" className='w-full my-3 justify-content-center md-3' onClick={refreshPage}>
                    Refresh
                </Button>
                {
                    deptData.map((data, index) => {
                        return (

                            <Table striped bordered hover className='table my-3 caption-top' responsive="lg" size="sm" key={index + data["_id"] + Math.random()}>
                                <caption style={{ textAlign: "center", fontSize: "22px", color: "black", fontWeight: "bold" }}>{"20" + data["_id"].substring(1, 3) + "-" + data["_id"].substring(3)}</caption>
                                <thead>
                                    <tr style={{ textAlign: "center", fontSize:"20px" }}>
                                        <th>Department</th>
                                        <th>Undergrad Total</th>
                                        <th>Undergrad Placed</th>
                                        <th>Postgrad Total</th>
                                        <th>Postgrad Placed</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data["departments"].map((innerData, index) => {
                                            return (

                                                <tr key={index + innerData["Department"] + Math.random()} style={{ textAlign: "center", fontSize: "18px"}}>
                                                    <td>{innerData["Department"]}</td>
                                                    <td>{innerData["UndergradTotal"]}</td>
                                                    <td>{innerData["UndergradPlaced"]}</td>
                                                    <td>{innerData["PostgradTotal"]}</td>
                                                    <td>{innerData["PostgradPlaced"]}</td>
                                                    <td><FontAwesomeIcon id={data.Year} className='icons' onClick={() => {
                                                        launch.current.click();
                                                        setRecordData(innerData);
                                                        setID({ _id: innerData._id });
                                                    }} icon={faPenToSquare} /></td>
                                                    <td><FontAwesomeIcon className='icons' onClick={() => {
                                                        deleteDeptRecord({ Year: innerData["Year"], Department: innerData["Department"] });
                                                        refreshPage();
                                                    }} id={data.Year} icon={faTrash} /></td>

                                                </tr>

                                            );
                                        })
                                    }
                                </tbody>
                            </Table>)
                    })
                }
            </div>

            {/* Form to add records */}
            <Form >
                <hr />
                <h2 className="my-3 ">Add Department Wise Records Here</h2>
                <Form.Group className="my-3 mb-3 " controlId="Year">
                    <Form.Label>Year</Form.Label>
                    <Form.Control className="inpts" type="text" placeholder="e.g y2324" onChange={onChange} name="Year" />
                </Form.Group>

                <Form.Group className="my-3 mb-3 " controlId="Department">
                    <Form.Label>Department</Form.Label>
                    <Form.Control className="inpts" type="text" onChange={onChange} placeholder="e.g CSE" name="Department" />
                </Form.Group>
                <Form.Group className="my-3 mb-3 " controlId="UndergradTotal">
                    <Form.Label>Undergrad Total</Form.Label>
                    <Form.Control className="inpts" type="number" onChange={onChange} placeholder="e.g 123" name="UndergradTotal" />
                </Form.Group>
                <Form.Group className="my-3 mb-3 " controlId="UndergradPlaced">
                    <Form.Label>Undergrad Placed</Form.Label>
                    <Form.Control className="inpts" type="number" onChange={onChange} placeholder="e.g 41" name="UndergradPlaced" />
                </Form.Group>
                <Form.Group className="my-3 mb-3 " controlId="PostgradTotal">
                    <Form.Label>Postgrad Total</Form.Label>
                    <Form.Control className="inpts" type="number" onChange={onChange} placeholder="e.g 158" name="PostgradTotal" />
                </Form.Group>
                <Form.Group className="my-3 mb-3 " controlId="PostgradPlaced">
                    <Form.Label>Postgrad Placed</Form.Label>
                    <Form.Control className="inpts" type="number" onChange={onChange} placeholder="e.g 63" name="PostgradPlaced" />
                </Form.Group>

                <Form.Group className="my-3 mb-3 " controlId="Submit">
                    <Button onClick={addARecord} className='b-end-btn-blue' variant="primary text-center" type="submit">
                        Add Data
                    </Button>
                </Form.Group>
            </Form >
        </>
    )
}
