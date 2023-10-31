import React from "react";
import { motion } from "framer-motion";
import { fadeIn} from '../../../utils/motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionWrapper from "../../../Higher_Order_Components/SectionWrapper";
import {
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import MBKokare_2 from "../../../img/kokare-sir_2.jpeg";

const Director = () => {
  return (
    <>
      <motion.div variants={
        fadeIn("right", "", 0.1, 1)
      }
      >

        <div className="m-2 nav-medium-light-shadows">
          {/* top div */}
          <div className="flex flex-col items-center justify-between mx-2 mb-4 sm:flex-row-reverse">
            <div className="text-center w-[50%]">
              <h2 className="p-2 text-3xl text-left text-center sm:text-4xl sm:p-4">
                Director's Message
              </h2>
            </div>
            <ul className="flex items-center justify-center p-2 sm:p-4 ">
              <li className="p-2 m-2 border-2 rounded-lg hover:cursor-pointer"><a target='_blank' href='https://twitter.com/tnp_sggsiet'><FontAwesomeIcon color="#000" className="w-[100%]" icon={faTwitter} /></a></li>
              <li className="p-2 m-2 border-2 rounded-lg hover:cursor-pointer"><a target='_blank' href='https://www.linkedin.com/in/sggs-tnpcell/'><FontAwesomeIcon color="#000" className="w-[100%]" icon={faLinkedinIn} /></a></li>
              <li className="p-2 m-2 border-2 rounded-lg hover:cursor-pointer"><a target='_blank' href='https://www.instagram.com/tnp_sggsiet/'><FontAwesomeIcon color="#000" className="w-[100%]" icon={faInstagram} /></a></li>
            </ul>
          </div>

          {/* below div */}
          <div className="flex flex-col items-center justify-center sm:flex-row">
            <div className="sm:w-[40%] w-[60%] text-center flex flex-col justify-center items-center">
              <img src={MBKokare_2} alt="" className="sm:w-[65%] h-[70%] mb-2 rounded-xl " />
              <p className="mb-2 text-center text-secondary">Dr. Manesh.B.Kokare</p>
            </div>
            {/* <img src={`https://tnp.iiitbh.ac.in/assets/institute.jpg`} alt="" className="sm:w-[45%] h-[100%]" /> */}
            <p className="p-2.5 mx-2 text-lg font-normal w-[80%]">
              Greetings and a very warm welcome to SGGSIE&T! <br />
              With a vision of education of human power for technological
              excellence, Shri Guru Gobind Singhji Institute of
              Engineering and Technology stands as one of the prestigious
              institutes in the state of Maharashtra. This institute
              provides you with the opportunities to empower you with the
              present technologies, with ever enthusiastic faculty to
              familiarize the students with future technology trends.
              institutes in the state of Maharashtra. This institute
              provides you with the opportunities to empower you with the
              present technologies, with ever enthusiastic faculty to
              familiarize the students with future technology trends.
            </p>
          </div>
        </div>
      </motion.div>

      {/* <Container className="dir" fluid>
        <h3 style={{ textAlign: "center" }}>Management's Message</h3>
        <Row style={{ display: "flex", justifyContent: "center" }}>
        <Col lg={6}>
        <Container className="dir-card">
        <img src={MBKokare} />
        <h5>Dr. M. B. Kokare</h5>
        <p className="dir-subtext">Director</p>
              <center>
                <hr />
              </center>
              <div className="scrollable">
                <p className="dir-details">
                  <span>Greetings and a very warm welcome to SGGSIE&T!</span>
                  <span>
                    With a vision of education of human power for technological
                    excellence, Shri Guru Gobind Singhji Institute of
                    Engineering and Technology stands as one of the prestigious
                    institutes in the state of Maharashtra. This institute
                    provides you with the opportunities to empower you with the
                    present technologies, with ever enthusiastic faculty to
                    familiarize the students with future technology trends.
                  </span>
                  <span>
                    The purpose of education is to transform proactive learners
                    into self-actualized learners. Students are encouraged to
                    harness their inquisitive skills with proactive learning,
                    soft skills which are required in all professions,
                    problem-solving skills along with programming languages to
                    equip our students to face the technological problems of the
                    future and imbibe Universal Human Values for sustainable
                    achievements.
                  </span>
                  <span>
                    Engineering is about acquiring profound knowledge. A system
                    of profound knowledge consists of four parts appreciation of
                    the system, knowledge about variation, theory of knowledge
                    and psychology. We teach students the necessary tools for
                    grasping profound knowledge. We allow our students to
                    customize their learning experiences to their learning
                    styles within the academic framework of our institute.
                    Students can learn through various mechanisms such as
                    classrooms, MOOC courses, alumni associations, experts in
                    the industry, working in laboratories and various others.
                  </span>
                  <span>
                    Many of our students are entrepreneurs who are ready to
                    support the start-up companies on campus. A significant
                    number of students pursue higher studies in India and
                    abroad. I would ask our students to take advantage of all
                    the opportunities and the tools to excel in this highly
                    competitive and fast advancing world. The Placement Office
                    (Internship Office) has been striving continuously to match
                    the students with their dream jobs (internships), resulting
                    in a win-win situation for the student and the hiring
                    organization.
                  </span>
                  <span>
                    I look forward to the placement season 2022-23 and wish the
                    students all the best.
                  </span>

                  <span>
                    Warm regards
                    <br />
                    Dr M. B. Kokare
                    <br />
                    Director, SGGSIE&T, Nanded
                  </span>
                </p>
              </div>
            </Container>
          </Col>
          <Col lg={6}>
            <Container className="dir-card">
              <img src={TNPLogo} />
              <h5>Training and Placement Incharge</h5>
              <center>
                <hr />
              </center>
              <div className="scrollable">
                <div className="dir-details">
                  <p>A hearty welcome to SGGSIE&T!</p>
                  <p>
                    The Institute is committed to providing state-of-the-art
                    technical education in a variety of fields and for
                    facilitating the transmission of knowledge in keeping with
                    the latest developments in methods of teaching. Each student
                    is also required to take certain minimum course credits in
                    the Department of Humanities and Social Sciences which
                    greatly enhances their outlook on society and its needs.
                  </p>
                  <p>
                    Recently the institute has signed MoUs for academic
                    collaboration with Foreign Universities like CUNY CREST and
                    Civil Engineering Department, The City University of New
                    York, USA, Oakland University Michigan, USA, SAI
                    Technologies, USA and University Technology Petronas,
                    Malaysia. MoUs are also signed with Industry associations
                    such as CMIA, Aurangabad, NIMA, Nashik, industries like TCS,
                    Indus Aviation Pune, ChipSpirit Bangalore, and Mentor
                    Graphics (A Siemens Business) etc.
                  </p>
                  <p>
                    Our team of placement coordinators and dedicated volunteers
                    will ensure that the recruitment process becomes a smooth
                    and pleasing experience for both the recruiters and the
                    students. Feel free to contact the Training & Placement
                    Office. With this, I welcome all the recruiters to SGGSIE&T.
                  </p>

                  <p className="closing">
                    Warm Regards
                    <br />
                    Training & Placement Cell,
                    <br />
                    SGGSIE&T, Nanded
                  </p>
                </div>
              </div>
            </Container>
          </Col>
          <Col lg={4}>
          <Container className="dir-card">
            <img src={ARPatil} />
            <h5>Dr. A. R. Patil</h5>
            <p className="dir-subtext">Dean, SGGSIE&T, Nanded</p>
            <center><hr /></center>
            <div className="scrollable">
              <p className="dir-details">
                <p>Dear Friends,</p>

                <p>It gives me immense pleasure to invite you all to the SGGSIE&T campus for 2022-23 placement and internship sessions.</p>
                <p>SGGSIE&T is a Govt. -Aided autonomous institute which at this date accommodates more than 2500 students which including 10 UG (B.Tech.) and 10 PG (M.Tech.) degrees and PhD programmes.</p>
                <p>Our students participate in various National level competitions and get prizes. For example, our students won first prizes worth ₹ 75000 each in three Smart India Hackathons (SIH) in 2019 alone! The problem statements were given by industries.  SIH is organised by MHRD in collaboration with AICTE. Our faculty is very strong (&gt;50% are with PhD degrees, mostly from IITs).  We have Research Center, QIP Center, and TEQIP-III funding – which enables a research and innovation culture. We also have Technology Innovation and Entrepreneurship Center, Startup Cell, Innovation Lab, and Intellectual Property Cell for producing tomorrow's job-givers.</p>
                <p>It has also ranked no. 4 (Govt. aided institution) in ARIIA ranking, in August 2020 and I am certain that your recruitment team will have a very productive and satisfying visit to our institute.</p>
                <p>Once again I cordially invite you to our campus for placements and I look forward to continuing a fruitful relationship between your organisation and SGGSIE&T.</p>

                <p>Warm regards<br />
                Dr A.R. Patil<br />
                Dean, SGGSIE&T, Nanded</p>
              </p>
            </div>
          </Container>
        </Col>
        </Row>
      </Container> */}
    </>
  );
}


export default SectionWrapper(Director, "");

