import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Stack } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faSquareXTwitter,
  faInstagram,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelopeOpen,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <>
      <Container className="footer" fluid>
        <Row className="sm:pl-[50px] sm:pr-[50px] p-[30px]">
          <Col className="f-col A">
            <h2>About</h2>
            <p className="text-justify text-white">{" "}This is one of the prestigious institutes in the state of
              Maharashtra. This institute provides you the opportunities to
              empower you with the present technologies. The faculty in the
              institute is ever enthusiastic to familiarize the students in
              future technology trends.{" "}
            </p>
            <Stack className="about-social" direction="horizontal">
              <a
                href="https://www.facebook.com/people/Tnpcell-Sggsiet/100073430083642/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon color="#3b5998" icon={faFacebookF} />
              </a>
              <a
                href="https://twitter.com/tnp_sggsiet"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon color="#1da1f2" icon={faSquareXTwitter} />
              </a>
              <a
                href="https://www.instagram.com/tnp_sggsiet/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon color="#ffc0cb" icon={faInstagram} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCxK3BwLWib2jd8y80CbD4DA"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon color="#ff0000" icon={faYoutube} />
              </a>
              <a
                href="https://www.linkedin.com/in/sggs-tnpcell/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon color="#0e76a8" icon={faLinkedinIn} />
              </a>
            </Stack>
          </Col>

          <Col className="f-col f-ql">
            <h2>Quick Links</h2>
            <div className="grid items-center justify-center grid-cols-1 gap-2 sm:grid-cols-2">
              <p className="w-full h-full text-center"><Link className="inline-block w-full h-full border-2 border-transparent text-white-class hover:cursor-pointer hover:text-blue-600" to="/">Home</Link></p >
              <p className="w-full h-full text-center"><Link className="inline-block w-full h-full border-2 border-transparent text-white-class hover:cursor-pointer hover:text-blue-600" to="/placements">Placements</Link></p>
              <p className="w-full h-full text-center"><Link className="inline-block w-full h-full border-2 border-transparent text-white-class hover:cursor-pointer hover:text-blue-600" to="/departments">Departments</Link></p>
              {/* <p>
                  <Link className="" to="/researches">Researches</Link>
                </p> */}
              <p className="w-full h-full text-center"><Link className="inline-block w-full h-full border-2 border-transparent text-white-class hover:cursor-pointer hover:text-blue-600" to="/past_recruiters">Past Recruiters</Link></p>
              <p className="w-full h-full text-center"><Link className="inline-block w-full h-full border-2 border-transparent text-white-class hover:cursor-pointer hover:text-blue-600" to="/special_facilities">Special Facilities</Link></p>
              <p className="w-full h-full text-center"><Link className="inline-block w-full h-full border-2 border-transparent text-white-class hover:cursor-pointer hover:text-blue-600" to="/contactus">Contact Us</Link></p>
              <p className="w-full h-full text-center"><Link className="inline-block w-full h-full border-2 border-transparent text-white-class hover:cursor-pointer hover:text-blue-600" to="/company_interest">Company Interest Form</Link></p>
              <p className="w-full h-full text-center"><Link className="inline-block w-full h-full border-2 border-transparent text-white-class hover:cursor-pointer hover:text-blue-600" to="/recruitment_procedures">Recruitment Procedures</Link></p>
            </div>
              {/* <p>
                  <Link className="" to="/studentSection">Student Section</Link>
                </p> */}
          </Col>

          <Col className="w-full f-col f-ci">
            <h2>Contact Info</h2>
            <Stack>
              <div className=" ci-cell">
                <FontAwesomeIcon
                  size="2x"
                  color="#0d6efd"
                  className="ci-icon"
                  icon={faMapMarkerAlt}
                />
                <div className="ci-cell-div ">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://maps.app.goo.gl/KdkCbFL9v8gFrEm98"
                  >
                    <span>SGGSIE&T, Vishunupuri, Nanded</span>
                  </a>
                </div>
              </div>
              <div className="ci-cell">
                <FontAwesomeIcon
                  size="2x"
                  color="#0d6efd"
                  className="ci-icon"
                  icon={faPhone}
                />
                <div
                  className="ci-cell-div "
                  style={{ alignItems: "center", color: "#fff" }}
                >
                  <div className="mt-2 mb-2">
                    TPO Dean IL:
                    <a href="tel:7588428778" className="inline-block">&nbsp;+91 94218 68526</a>
                    <br />
                    TPO Assistant:
                    <a href="tel:7507877206" className="inline-block">&nbsp;+91 75078 77206</a>
                  </div>
                </div>
              </div>
              <div className="ci-cell">
                <FontAwesomeIcon
                  size="2x"
                  color="#0d6efd"
                  className="ci-icon"
                  icon={faEnvelopeOpen}
                />
                <div
                  className="ci-cell-div"
                  style={{ alignItems: "center", color: "#fff" }}
                >
                  <div>
                    <a href="mailto:tpo@sggs.ac.in">tpo@sggs.ac.in</a>
                    <br />
                    <a href="mailto:tnpcell@sggs.ac.in">tnpcell@sggs.ac.in</a>
                    
                    <br />
                    <a href="mailto:tnpcell@sggs.ac.in">tnpsecretary@sggs.ac.in</a>
                  </div>
                </div>
              </div>
            </Stack>
          </Col>
        </Row>

        <div className="copyright">
          Copyright @2024-25 SGGSIE&T. All Rights Reserved.<br />
          Developed By Technical Team | T&P Cell
        </div>
      </Container>
    </>
  );
}
