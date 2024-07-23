import React, { useState } from 'react';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import SectionWrapper from "../../../Higher_Order_Components/SectionWrapper";

const JAF = () => {
  const [inputs, setInputs] = useState({
    ThisisFrom: '',
    anyMessage: '',
    nameOrg: '',
    postalAdd: '',
    websiteLink: '',
    typeOfOrg: [],
    typeOfOrgArea: '',
    industrySector: [],
    industrySectorArea: '',
    HRname: '',
    HRemail: '',
    HRnumber: 0,
    HRphone: 0,
    fstname: '',
    fstemail: '',
    fstnumber: 0,
    fstphone: 0,
    secname: '',
    secemail: '',
    secnumber: 0,
    secphone: 0,
    jobDesig: '',
    jobDesc: '',
    jobLoc: '',
    ctc: '',
    stipend: '',
    bonus: '',
    cgpa: '',
    secondaryEdu: '',
    primaryEdu: '',
    personalInterview: [],
    selectionCriteria: [],
    rounds: 0,
    offers: 0,
    period: '',
    btechBranches: [],
    mtechBranches: []
  });

  const [fileInputs, setFileInputs] = useState({
    from: '',
    subject: '',
    specifications: ''
  });

  const [file, setFile] = useState(null);
  const host = 'http://localhost:4019';
  // const host = process.env.REACT_APP_REQURL;

  const Submit = async (event) => {
    event.preventDefault();
    // console.log(inputs);
    if (inputs.ThisisFrom !== '') {
      const formData = new FormData();

      for (const [key, value] of Object.entries(inputs)) {
        formData.append(key, value);
      }
      getAlert("Form Submitted Successfully");
      try {
        const response = await axios.post(`${host}/sendFile/filled`, formData, {
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
    else {
      getAlert("Enter Valid Credentials");
    }
  }

  const onChange = (e) => {
    if (e.target.type === 'checkbox') {
      const { name, value } = e.target;
      if (e.target.checked) {
        setInputs({ ...inputs, [name]: [...inputs[name], value] });
      } else {
        const filteredValues = inputs[name].filter(item => item !== value);
        setInputs({ ...inputs, [name]: filteredValues });
      }
    } else {
      setInputs({ ...inputs, [e.target.name]: e.target.value });
      setFileInputs({ ...fileInputs, [e.target.name]: e.target.value });
    }
  }

  const getAlert = (message) => {
    document.getElementById('alertHeading').innerHTML = message;
    document.getElementById('alertBox').style.display = 'block';
    document.getElementById('alertBox').style.position = 'fixed';
    document.getElementById('docInp').value = '';
    setTimeout(() => {
      document.getElementById('alertBox').style.display = 'none';
    }, 3000);
  }

  // sending file to the backend
  const handleFileChange = async (e) => {
    setFile([...e.target.files]);
  };

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const handleFileSubmit = async (e) => {
    e.preventDefault();
    if (isValidEmail(fileInputs.from)) {
      getAlert("Form Submitted Successfully");
      const formData = new FormData();

      if (file !== null) {
        // for multiple files
        file.forEach((singleFile) => {
          formData.append('file', singleFile);
        });

        // Append the object data to the FormData
        formData.append('from', fileInputs.from);
        formData.append('subject', fileInputs.subject);
        formData.append('specifications', fileInputs.specifications);

        // for single file
        // formData.append('file', file);
        // console.log(file);

        setFileInputs({
          from: '',
          subject: '',
          specifications: ''
        });
        document.getElementById('from').value = '';
        document.getElementById('subject').value = '';
        document.getElementById('specifications').value = '';

        try {
          const response = await axios.post(`${host}/sendFile/uploaded`, formData);

          if (response.status === 200) {
            // console.log('File uploaded and sent successfully');
          } else {
            // console.error(response.status, 'Failed to upload the file and send');
          }
        } catch (error) {
          // console.error('Error:', error.response);
        }
      }
      else {
        getAlert("Please Upload the Form to Submit");
      }
    } else {
      getAlert("Enter Valid Credentials");
    }

  };


  return (
    <>

      {/* wrapper */}
      <div className='m-1 mt-4'>
        <div className='hidden w-[90%] mx-auto z-10' id='alertBox'>
          <Alert variant="success" >
            <Alert.Heading id='alertHeading'></Alert.Heading>
          </Alert>
        </div>
        <div className='flex flex-col items-start justify-around sm:flex-row'>
          <div className='m-4 text-center align-center'>
            <h1 className='w-full m-2 mb-4 text-3xl align-top'>Job Announcement Form for 2023-24 SGGSIE&T</h1>
            <p className='text-xl font-bold text-center'>Download the JAF &rarr; Fill the Form 	&rarr; Upload the JAF </p>
          </div>

          {/* Non spot form filling */}
          <div className='flex flex-col items-center justify-between text-left sm:flex-row nav-light-shadows h-[430px] sm:h-[270px] w-full sm:w-[50%] '>

            {/* Download forms */}
            <div className='w-full'>
              <h2 className='m-2 text-center'>Download Forms Here</h2>
              <div className='flex flex-col items-center text-left'>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://docs.google.com/document/d/1auq7RC49WYZ_oQCxjm0BzgKaWAGP3G-A/edit?usp=sharing&ouid=106712804397345244222&rtpof=true&sd=true"
                  className='w-[80%] p-2 m-2 border-2 text-center rounded-xl nav-light-shadows hover:bg-red-400'
                >
                  <button className='font-bold text-center'>Download JAF For Recruitment</button>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://docs.google.com/document/d/1BD-oeS6kxzI19G-ylMq_4kNKLFrKR6s6/edit?usp=sharing&ouid=106712804397345244222&rtpof=true&sd=true"
                  className='w-[80%] p-2 m-2 border-2 text-center rounded-xl nav-light-shadows hover:bg-red-400'
                >
                  <button className='font-bold text-center'>Download JAF For Internship</button>
                </a>
              </div>
            </div>

            {/* Upload form */}
            <div className=' w-full sm:w-[50%] m-2 text-center '>
              <Form>
                <h2 className='m-2 text-center'>Upload Forms Here</h2>
                <input type="email" id='from' className='w-[80%] mx-auto border-b-2 border-black text-black m-1 p-1' placeholder='Email Address' name='from' required onChange={onChange} />
                <input type="text" id='subject' className='w-[80%] mx-auto border-b-2 border-black text-black m-1 p-1' placeholder='Subject' name='subject' onChange={onChange} />
                <input type="text" id='specifications' className='w-[80%] mx-auto border-b-2 border-black text-black m-1 p-1' placeholder='Any Specifications' name='specifications' onChange={onChange} />
                <input type="file" accept='.docx, .pdf' id='docInp' className='m-2 mx-auto text-center border-2' onChange={handleFileChange} multiple />
                <Button variant="primary" className='m-1 bg-blue-700' type={'submit'} onClick={handleFileSubmit}>
                  Submit
                </Button>
              </Form>
            </div>

          </div>
        </div>

        {/* On spot filling form */}
        <div className='mt-4 rounded-[20px] p-4 nav-light-shadows '>
          <h2 className='text-2xl'>Fill The Form Manually</h2>
          <Form>
            <input type="email" id='from' className='w-full sm:w-[50%] mx-auto border-b-2 border-black text-black m-1 p-1' placeholder='Enter Your Email Address' name='ThisisFrom' required onChange={onChange} />
            <div className='flex flex-col items-center justify-between sm:flex-row'>
              <section className='p-1 w-full sm:w-[45%] min-h-[350px]'>
                {/* About the organisation  */}
                <h3 className='mt-2 mb-2 text-xl text-red-600 '>About the Organisation</h3>
                <Form.Group className="m-2 mb-3 ">
                  <Form.Label className='m-2'>Name of Organisation</Form.Label>
                  <Form.Control type="text" placeholder="Name of Org." onChange={onChange} name='nameOrg' />

                  <Form.Label className='m-2'>Postal Address</Form.Label>
                  <Form.Control type="text" placeholder="Address" onChange={onChange} name='postalAdd' />

                  <Form.Label className='m-2'>Website</Form.Label>
                  <Form.Control type="text" placeholder="Website Link(if any)" onChange={onChange} name='websiteLink' />

                </Form.Group>
              </section>

              <section className='p-1 w-full sm:w-[45%] min-h-[350px]'>
                <h3 className='mt-2 mb-2 text-xl text-red-600 '>Job Profile</h3>
                <Form.Group className="m-2 mb-3 ">
                  <Form.Label className='m-2'>Job Designation</Form.Label>
                  <Form.Control as='textarea' onChange={onChange} name='jobDesig' placeholder="Job Designation" />
                  <Form.Label className='m-2'>Job Description</Form.Label>
                  <Form.Control as='textarea' onChange={onChange} name='jobDesc' placeholder="Job Description" />
                  <Form.Label className='m-2'>Job Location</Form.Label>
                  <Form.Control as='textarea' onChange={onChange} name='jobLoc' placeholder="Job Location" />
                </Form.Group>
              </section>
            </div>

            <section className='p-1'>
              {/* Type organisation  */}
              <h3 className='mt-2 mb-2 text-xl text-red-600 '>Type Of Organisation</h3>
              <Form.Group className="m-2 mb-3">
                <div className='grid items-center justify-center grid-cols-1 gap-2 sm:grid-cols-5'>
                  <Form.Check type='checkbox' className='hover:cursor-pointer' value='Private Sector' onChange={onChange} name='typeOfOrg' label='1. Private Sector' />
                  <Form.Check type='checkbox' className='hover:cursor-pointer' value='Public Sector' onChange={onChange} name='typeOfOrg' label='2. Public Sector' />
                  <Form.Check type='checkbox' className='hover:cursor-pointer' value='Government' onChange={onChange} name='typeOfOrg' label='3. Government' />
                  <Form.Check type='checkbox' className='hover:cursor-pointer' value='Start-Up' onChange={onChange} name='typeOfOrg' label='4. Start-Up' />
                  <Form.Check type='checkbox' className='hover:cursor-pointer' value='MNC(Indian Origin)' onChange={onChange} name='typeOfOrg' label='5. MNC(Indian Origin)' />
                  <Form.Check type='checkbox' className='hover:cursor-pointer' value='MNC(Foreign Origin)' onChange={onChange} name='typeOfOrg' label='6. MNC(Foreign Origin)' />
                  <Form.Control as="textarea" onChange={onChange} name='typeOfOrgArea' placeholder='If other, specify' />
                </div>
              </Form.Group>
            </section>

            <section className='p-1'>
              {/* Type organisation  */}
              <h3 className='mt-2 mb-2 text-xl text-red-600 '>Indutry Sector</h3>
              <Form.Group className="m-2 mb-3"  >
                <div className='grid items-center justify-center grid-cols-1 gap-2 sm:grid-cols-5'>
                  <Form.Check type='checkbox' className='hover:cursor-pointer' value='Analytics' onChange={onChange} name='industrySector' label='1. Analytics' />
                  <Form.Check type='checkbox' className='hover:cursor-pointer' value='Consulting' onChange={onChange} name='industrySector' label='2. Consulting' />
                  <Form.Check type='checkbox' className='hover:cursor-pointer' value='Core' onChange={onChange} name='industrySector' label='3. Core(Technical)' />
                  <Form.Check type='checkbox' className='hover:cursor-pointer' value='Finance' onChange={onChange} name='industrySector' label='4. Finance' />
                  <Form.Check type='checkbox' className='hover:cursor-pointer' value='I.T./Software' onChange={onChange} name='industrySector' label='5. I.T./Software' />
                  <Form.Check type='checkbox' className='hover:cursor-pointer' value='Management' onChange={onChange} name='industrySector' label='6. Management' />
                  <Form.Check type='checkbox' className='hover:cursor-pointer' value='Teaching/Research' onChange={onChange} name='industrySector' label='7. Teaching/Research' />
                  <Form.Control as="textarea" onChange={onChange} name='industrySectorArea' placeholder='If other, specify' />
                </div>
              </Form.Group>
            </section>

            <section className='p-1'>
              <h2 className='mt-2 mb-2 text-xl text-red-600'>Contact Details</h2>
              <div className='flex flex-col items-center justify-between sm:flex-row'>
                <div id="HR" className='w-full sm:w-[33%]'>
                  <h3 className='text-red-600 '>Head HR</h3>
                  <Form.Group className="m-2 mb-3"  >
                    <Form.Label className='m-2'>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" onChange={onChange} name='HRname' />
                    <Form.Label className='m-2'>E-mail</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" onChange={onChange} name='HRemail' />
                    <Form.Label className='m-2'>Mobile</Form.Label>
                    <Form.Control type="number" placeholder="Enter Mobile No" onChange={onChange} name='HRnumber' />
                    <Form.Label className='m-2'>Phone</Form.Label>
                    <Form.Control type="number" placeholder="Enter Phone No" onChange={onChange} name='HRphone' />
                  </Form.Group>
                </div>
                <div id="fstPerson" className='w-full sm:w-[33%]'>
                  <h3 className='text-red-600 '>First Person Contact</h3>
                  <Form.Group className="m-2 mb-3"  >
                    <Form.Label className='m-2'>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" onChange={onChange} name='fstname' />
                    <Form.Label className='m-2'>E-mail</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" onChange={onChange} name='fstemail' />
                    <Form.Label className='m-2'>Mobile</Form.Label>
                    <Form.Control type="number" placeholder="Enter Mobile No" onChange={onChange} name='fstnumber' />
                    <Form.Label className='m-2'>Phone</Form.Label>
                    <Form.Control type="number" placeholder="Enter Phone No" onChange={onChange} name='fstphone' />
                  </Form.Group>
                </div>
                <div id="secPerson" className='w-full sm:w-[33%]'>
                  <h3 className='text-red-600 '>Second Person Contact</h3>
                  <Form.Group className="m-2 mb-3"  >
                    <Form.Label className='m-2'>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" onChange={onChange} name='secname' />
                    <Form.Label className='m-2'>E-mail</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" onChange={onChange} name='secemail' />
                    <Form.Label className='m-2'>Mobile</Form.Label>
                    <Form.Control type="number" placeholder="Enter Mobile No" onChange={onChange} name='secnumber' />
                    <Form.Label className='m-2'>Phone</Form.Label>
                    <Form.Control type="number" placeholder="Enter Phone No" onChange={onChange} name='secphone' />
                  </Form.Group>
                </div>
              </div>
            </section>

            <div className='flex flex-col items-center justify-between sm:flex-row'>
              <section className='p-1 w-full sm:w-[45%] min-h-[300px]'>
                <h3 className='mt-2 mb-2 text-xl text-red-600 '>Salary Break-Up</h3>
                <Form.Group className="m-2 mb-3 ">
                  <Form.Label className='m-2'>Cost To Company(CTC)</Form.Label>
                  <Form.Control type='text' onChange={onChange} name='ctc' placeholder="CTC" />
                  <Form.Label className='m-2'>Stipend</Form.Label>
                  <Form.Control type='text' onChange={onChange} name='stipend' placeholder="Stipend" />
                  <Form.Label className='m-2'>Bonus/Perks/Incentives</Form.Label>
                  <Form.Control type='text' onChange={onChange} name='bonus' placeholder="Bonus/Perks/Incentives" />
                </Form.Group>
              </section>

              <section className='p-1 w-full sm:w-[45%] min-h-[300px]'>
                <h3 className='mt-2 mb-2 text-xl text-red-600 '>Eligibility Criteria</h3>
                <Form.Group className="m-2 mb-3 ">
                  <Form.Label className='m-2'>CGPA(on 10)</Form.Label>
                  <Form.Control type='text' onChange={onChange} name='cgpa' placeholder="CGPA" />
                  <Form.Label className='m-2'>XII %</Form.Label>
                  <Form.Control type='text' onChange={onChange} name='secondaryEdu' placeholder="XII %" />
                  <Form.Label className='m-2'>X %</Form.Label>
                  <Form.Control type='text' onChange={onChange} name='primaryEdu' placeholder="X %" />
                </Form.Group>
              </section>
            </div>

            <section className='p-1'>
              <h3 className='mt-2 mb-2 text-xl text-red-600 '>Selection Process</h3>
              <Form.Group className="m-2 mb-3 ">
                <div className='flex flex-col items-center justify-between sm:flex-row'>
                  <div className='w-full sm:w-[33%]'>
                    <Form.Check type='checkbox' className='hover:cursor-pointer' value='Pre-Placement Talk' label="Pre Placement Talk" onChange={onChange} name='personalInterview' />
                    <Form.Check type='checkbox' className='hover:cursor-pointer' value='Personal Interview' label="Sortlist from Resumes" onChange={onChange} name='personalInterview' />
                    <Form.Check type='checkbox' className='hover:cursor-pointer' value='Written Test' label="Written Test" onChange={onChange} name='personalInterview' />
                    <Form.Check type='checkbox' className='hover:cursor-pointer' value='Online Test' label="Online Test" onChange={onChange} name='personalInterview' />
                  </div>
                  <div className='flex flex-col items-start justify-center w-full sm:w-[33%]'>
                    <Form.Check type='checkbox' className='hover:cursor-pointer' value='Technical Test' onChange={onChange} name='selectionCriteria' label='Technical Test' />
                    <Form.Check type='checkbox' className='hover:cursor-pointer' value='Aptitude Tes' onChange={onChange} name='selectionCriteria' label='Aptitude Test' />
                    <Form.Check type='checkbox' className='hover:cursor-pointer' value='Psychometric Test' onChange={onChange} name='selectionCriteria' label='Psychometric Test' />
                    <Form.Check type='checkbox' className='hover:cursor-pointer' value='Group Discussion' onChange={onChange} name='selectionCriteria' label='Group Discussion' />
                  </div>
                  <div className='w-full sm:w-[33%]'>
                    <span>Number of rounds<Form.Control type="number" onChange={onChange} name='rounds' placeholder="Rounds" /></span>
                    <span>Number of offers you intend to make<Form.Control type="number" placeholder="Offers" onChange={onChange} name='offers' /></span>
                    <span>Preferred Period<Form.Control type="text" onChange={onChange} name='period' placeholder="Period" /></span>
                  </div>
                </div>
              </Form.Group>
            </section>

            <section className='p-1'>
              <h3 className='mt-2 mb-2 text-xl text-red-600 '>Logistics Requirements</h3>
              <div className='flex flex-col items-center justify-between sm:flex-row' >
                <div className='w-full sm:w-[50%] m-2'>
                  <h3>B. Tech</h3>
                  <div className='grid items-center justify-center grid-cols-2 gap-2 m-2 sm:grid-cols-5'>
                    <Form.Check type='checkbox' className='hover:cursor-pointer' value='ALL' onChange={onChange} name='btechBranches' label='ALL' />
                    <Form.Check type='checkbox' className='hover:cursor-pointer' value='Computer Science & Engineering' onChange={onChange} name='btechBranches' label='CSE' />
                    <Form.Check type='checkbox' className='hover:cursor-pointer' value='Electronics & Telecommunication Engineering' onChange={onChange} name='btechBranches' label='EC' />
                    <Form.Check type='checkbox' className='hover:cursor-pointer' value='Electrical Engineering' onChange={onChange} name='btechBranches' label='EE' />
                    <Form.Check type='checkbox' className='hover:cursor-pointer' value='Chemical Engineering ' onChange={onChange} name='btechBranches' label='CH' />
                    <Form.Check type='checkbox' className='hover:cursor-pointer' value='Mechanical Engineering' onChange={onChange} name='btechBranches' label='ME' />
                    <Form.Check type='checkbox' className='hover:cursor-pointer' value='Textile Technology. ' onChange={onChange} name='btechBranches' label='TT' />
                    <Form.Check type='checkbox' className='hover:cursor-pointer' value=' Production Engineering' onChange={onChange} name='btechBranches' label='PE' />
                    <Form.Check type='checkbox' className='hover:cursor-pointer' value='Information Technology' onChange={onChange} name='btechBranches' label='IT' />
                    <Form.Check type='checkbox' className='hover:cursor-pointer' value='Civil Engineering' onChange={onChange} name='btechBranches' label='CE' />
                    <Form.Check type='checkbox' className='hover:cursor-pointer' value='Instrumentation Engineering' onChange={onChange} name='btechBranches' label='IN' />
                  </div>
                </div>
                <div className='w-full sm:w-[50%] m-2'>
                  <h3>M. Tech</h3>
                  <div className='grid items-center justify-center grid-cols-2 gap-2 m-2 sm:grid-cols-5'>
                    <Form.Check type='checkbox' className='hover:cursor-pointer' value='ALL' onChange={onChange} name='mtechBranches' label='ALL' />
                    <Form.Check type='checkbox' className='hover:cursor-pointer' value='Artificial Intelligence' onChange={onChange} name='mtechBranches' label='AI' />
                    <Form.Check type='checkbox' className='hover:cursor-pointer' value='Instrumentation Engineering' onChange={onChange} name='mtechBranches' label='IN' />
                    <Form.Check type='checkbox' className='hover:cursor-pointer' value='Mechanical CAD/CAM' onChange={onChange} name='mtechBranches' label='CAD/CAM' />
                    <Form.Check type='checkbox' className='hover:cursor-pointer' value='Mechanical- Product Life Cycle Management' onChange={onChange} name='mtechBranches' label='PLCM' />
                    <Form.Check type='checkbox' className='hover:cursor-pointer' value='Computer Networks and Information Security' onChange={onChange} name='mtechBranches' label='CN&IS' />
                    <Form.Check type='checkbox' className='hover:cursor-pointer' value='Information Technology' onChange={onChange} name='mtechBranches' label='IT' />
                    <Form.Check type='checkbox' className='hover:cursor-pointer' value='Structural Engineering' onChange={onChange} name='mtechBranches' label='SE' />
                    <Form.Check type='checkbox' className='hover:cursor-pointer' value='Embedded System and VLSI Design' onChange={onChange} name='mtechBranches' label='VLSI' />
                    <Form.Check type='checkbox' className='hover:cursor-pointer' value='Textile Technology' onChange={onChange} name='mtechBranches' label='TT' />
                    <Form.Check type='checkbox' className='hover:cursor-pointer' value='Civil Water Management Engineering' onChange={onChange} name='mtechBranches' label='WM' />
                  </div>
                </div>
              </div>

            </section>


            {/* Submit or clear the form */}
            <div className='flex items-center justify-left'>
              <Button variant="primary" type="submit" className='m-2 bg-blue-700' onClick={Submit}>
                Submit
              </Button>
              <Button variant="primary" type="reset" id='reset' className='m-2 bg-blue-700'>
                Reset
              </Button>
            </div>
          </Form>

        </div>
      </div>
    </>
  )
}
export default SectionWrapper(JAF, "");
