import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import SectionWrapper from "../../../Higher_Order_Components/SectionWrapper";

export const CompanyInterest = () => {
  const [inputs, setInputs] = useState({
    ThisisFrom: '',
    companyName: '',
    companyEmail: '',
    websiteLink: '',
    HRmobNo: '',
    HRalterateNo: '',
    HRmail: '',
    specifications: '',
  });
  // const host = 'http://localhost:4019';
  const host = process.env.REACT_APP_REQURL;

  const getAlert = (message) => {
    document.getElementById('alertHeading').innerHTML = message;
    document.getElementById('alertBox').style.display = 'block';
    document.getElementById('alertBox').style.position = 'fixed';
    setTimeout(() => {
      document.getElementById('alertBox').style.display = 'none';
    }, 3000);
  }

  const Submit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    getAlert("Form Submitted Successfully");
    for (const [key, value] of Object.entries(inputs)) {
      formData.append(key, value);
    }
    if (inputs.ThisisFrom !== '') {
      try {
        const response = await axios.post(`${host}/sendFile/interestForm`, formData, {
          headers: {
            "Content-Type": "application/json"
          }
        });
        if (response) {
          // console.log("Success");
        }
        else {
          getAlert("Some error occured");
          // console.log("Some error occured");
        }
      } catch (error) {
        // console.error('Error:', error);
      }
      document.getElementById('reset').click();
    }
    else{
      getAlert("Fill the fields");
    }
  }


  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }


  useEffect(() => {
    document.title = "Company Interest Form | SGGS Training & Placement";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className='m-2 w-[90%] mx-auto'>
        <div className='hidden w-[90%] mx-auto z-10' id='alertBox'>
          <Alert variant="success" >
            <Alert.Heading id='alertHeading'></Alert.Heading>
          </Alert>
        </div>
        <h1 className='m-4 text-3xl'>Company Interest Form</h1>
        <div className='border-2 nav-light-shadows rounded-xl'>
          <h2 className='w-[95%] mx-auto m-2 p-2 text-xl '>Get Job Announcement Forms Here</h2>
          <div className='flex flex-col items-center justify-center m-4 sm:flex-row'>
            <Link to='/jaf_recuriment' className='inline-block w-full h-full p-2 m-2 text-lg font-bold text-center border-2 rounded-xl nav-light-shadows'>JAF Direct Recuritment</Link>
            <Link to='/jaf_recuriment' className='inline-block w-full h-full p-2 m-2 text-lg font-bold text-center border-2 rounded-xl nav-light-shadows'>JAF Internship</Link>
          </div>
        </div>
      </div>

      <div className='w-[90%] mx-auto my-4 nav-light-shadows p-2 rounded-xl'>
        <Form>
          <div className='m-2'>
            <h3>From: </h3>
            <input type="email" id='from' className='w-full sm:w-[50%] p-1 m-1 mx-auto text-black border-b-2 border-black ' placeholder='Enter Your Email Address' name='ThisisFrom' required onChange={onChange} />
          </div>
          <div className=''>
            <section className='w-full p-1'>
              <div className='flex flex-col items-center justify-between sm:flex-row'>

                <Form.Group className="m-2 mb-3  w-[90%] sm:w-[50%]  ">
                  <h3 className='mt-2 mb-2 text-xl text-red-600 '>Company Details</h3>
                  <Form.Label className='m-2'>Company Name: </Form.Label>
                  <Form.Control type="text" placeholder="Company Name" onChange={onChange} name='companyName' />

                  <Form.Label className='m-2'>Official Email-Id:</Form.Label>
                  <Form.Control type="email" placeholder="Official Email-ID" onChange={onChange} name='companyEmail' />

                  <Form.Label className='m-2'>Company's Website Link(if any):</Form.Label>
                  <Form.Control type="text" placeholder="Website Link(if any)" onChange={onChange} name='websiteLink' />

                </Form.Group>

                <Form.Group className="m-2 mb-3   w-[90%] sm:w-[50%]   ">
                  <h3 className='mt-2 mb-2 text-xl text-red-600 '>Contact Information</h3>
                  <Form.Label className='m-2'>HR Mobile No: </Form.Label>
                  <Form.Control type="number" placeholder="HR Mobile No" onChange={onChange} name='HRmobNo' />

                  <Form.Label className='m-2'>Alternate Contact No:</Form.Label>
                  <Form.Control type="number" placeholder="Alternate Contact No" onChange={onChange} name='HRalterateNo' />

                  <Form.Label className='m-2'>HR Mail ID:</Form.Label>
                  <Form.Control type="email" placeholder="HR Mail ID" onChange={onChange} name='HRmail' />
                </Form.Group>
              </div>

              <div className='flex flex-col items-start justify-between align-top sm:flex-row'>


                <Form.Group className="m-2 mb-3 w-[90%] sm:w-[50%] align-top">
                  <h3 className='mt-2 mb-2 text-xl text-red-600 '>Any Specifications:</h3>
                  <Form.Control as="textarea" cols='10' rows='10' onChange={onChange} name='specifications' placeholder='If any, specify' />
                </Form.Group>
              </div>
            </section>
          </div>

          <div className='flex items-center justify-left'>
            <Button variant="primary" type="submit" className='m-2 bg-blue-700' onClick={Submit}>
              Submit
            </Button>
            <Button variant="primary" type="reset" id='reset' className='m-2 bg-blue-700'>
              Reset
            </Button>
          </div>
        </Form >

      </div >
    </>
  )
}

export default SectionWrapper(CompanyInterest, "");