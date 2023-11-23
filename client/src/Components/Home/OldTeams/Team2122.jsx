import React from "react";

import SuruchiW from "../../../img/old-team/suruchiwalthare.jpg";
import SaurabhP from "../../../img/old-team/saurabhpachghare.jpg";
import sanwag from "../../../img/old-team/sanketwaghmare.jpg";
import sarbha from "../../../img/old-team/sarveshabhatgare.jpg";
import sahdon from "../../../img/old-team/sahildongre.jpg";
// import mahwat from '../../../img/old-team/maheshwattamwar.jpg';
import kshdha from "../../../img/old-team/kshitijdhanvij.jpg";
import apeshi from "../../../img/old-team/apekshashinde.jpg";
import monham from "../../../img/old-team/monikahamand.jpg";
// import harkad from "../../../img/old-team/harshkadam.jpg";
// import vaides from "../../../img/old-team/vaidikdeshmukh.jpg";
import kapkap from "../../../img/old-team/kapilkapse.jpg";
import yasrau from "../../../img/old-team/yashraut.jpg";
import tandes from "../../../img/old-team/tanmaydeshmukh.jpg";
import poobho from "../../../img/old-team/poojabhoskar.jpg";
import nitkod from "../../../img/old-team/nitinkode.jpg";
import omfuta from "../../../img/old-team/omfutariya.jpg";
import shisin from "../../../img/old-team/shivangsingh.jpg";
import saimul from "../../../img/old-team/sairajmulange.jpg";
import ayuran from "../../../img/old-team/ayushrane.jpg";
import vedtot from "../../../img/old-team/vedanttotla.jpg";
import saksab from "../../../img/old-team/sakshisabu.jpg";
import hitkol from "../../../img/old-team/hiteshkoli.jpg";
import russol from "../../../img/old-team/rushikeshsolanke.jpg";
import akakha from "../../../img/old-team/akankshakhandare.jpg";
import rohgar from "../../../img/old-team/rohitgarje.jpg";
import hemsaj from "../../../img/old-team/hemantsajjan.jpg";
import samdes from "../../../img/old-team/samradnyideshpande.jpg";
import puskha from "../../../img/old-team/pushkarkhawas.jpg";
import shisap from "../../../img/old-team/shivanisapkal.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const TeamCard = (props) => {
  return (
    <div className="st-team-card">
      <img src={props.img} alt="image" />
      <h3>{props.name}</h3>
      <h4>{props.designation}</h4>
      <div className="team-links">
        <a href={`tel:${props.phone}`}>
          <FontAwesomeIcon icon={faPhone} />
        </a>
        {props.mail ? (
          <a href={`mailto:${props.mail}`}>
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        ) : (
          <></>
        )}
        {/* <a href={`mailto:${props.mail}`}>
          <FontAwesomeIcon icon={faEnvelope} />
        </a> */}
        <a href={props.linkedin}>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </div>
  );
};

function Team2122() {
  return (
    <>
      <div className="st-team">
        <h2
          className="text-center team-main-text new-font"
          style={{ marginTop: "20px" }}
        >
          STUDENTS TEAM (21-22)
        </h2>
        <div className="st-team-container">
          <div className="st-team-group st-team-2x">
            <h3>Secretaries</h3>
            <div className="st-team-contents">
              <TeamCard
                img={SuruchiW}
                name="Suruchi Walthare"
                designation="Training & Placement Secretary"
                phone="8956426701"
                mail="2019bcs050@sggs.ac.in"
                linkedin="https://www.linkedin.com/in/suruchi-walthare-4841311b1/"
              />
              <TeamCard
                img={SaurabhP}
                name="Saurabh Pachghare"
                designation="Training & Placement Secretary"
                phone="7841983268"
                mail="2019bel019@sggs.ac.in"
                linkedin="https://www.linkedin.com/in/saurabh-pachghare-3bb471207/"
              />
            </div>
          </div>
          <div className="st-team-group st-team-2x">
            <h3>HR Executives</h3>
            <div className="st-team-contents">
              <TeamCard
                img={sahdon}
                name="Sahil Dongare"
                designation="HR Executive"
                phone="tel:7745028224"
                mail="mailto:2019bcs046@sggs.ac.in"
                linkedin="linkedin.com/in/sahil-dongare-7794a41ab"
              />
              <TeamCard
                img={sanwag}
                name="Sanket Waghmare"
                designation="HR Executive"
                phone="tel:9067405977"
                mail="mailto:2019bce050@sggs.ac.in"
                linkedin="https://www.linkedin.com/in/sanket-waghmare-318093222"
              />
              <TeamCard
                img={sarbha}
                name="Sarvesha Bhatgare"
                designation="HR Executive"
                phone="tel:8668953689"
                mail="mailto:2019bch024@sggs.ac.in"
                linkedin="#"
              />
            </div>
          </div>
          <div className="st-team-group st-team-2x">
            <h3>DBMS Executives</h3>
            <div className="st-team-contents">
              <TeamCard
                img={kshdha}
                name="Kshitij Dhanvij"
                designation="HR & Departmental Coordinator"
                phone="#"
                mail="#"
                linkedin="#"
              />
              <TeamCard
                designation="DBMS Executive"
                name="Monika Hamand"
                img={monham}
                phone="tel:9156591896"
                mail="mailto:2019bel021@sggs.ac.in"
                linkedin="https://www.linkedin.com/in/monika-hamand-59a020203"
              />
            </div>
          </div>
          <div className="st-team-group st-team-2x">
            <h3>Placement Drive Executives</h3>
            <div className="st-team-contents">
              <TeamCard
                designation="Placement Drive Executive"
                name="Ayush Rane"
                img={ayuran}
                phone="tel:7385570289"
                mail="mailto:2019bch152@sggs.ac.in"
                linkedin="#"
              />
              <TeamCard
                designation="Placement Drive Executive"
                name="Sakshi Sabu"
                img={saksab}
                phone="tel:9403067337"
                mail="mailto:sabusakshi12@gmail.com"
                linkedin="https://www.linkedin.com/in/sakshi-sabu-79ba06194"
              />
              <TeamCard
                designation="Placement Drive Executive"
                name="Shivang Singh"
                img={shisin}
                phone="tel:7588915396"
                mail="mailto:2019bel027@sggs.ac.in"
                linkedin="#"
              />
              <TeamCard
                designation="Placement Drive Executive"
                name="Vedant Totla"
                img={vedtot}
                phone="tel:9307863330"
                mail="mailto:2019bme068@sggs.ac.in"
                linkedin="https://www.linkedin.com/in/vedant-kailashji-totla-a070b520b"
              />
            </div>
          </div>
          <div className="st-team-group st-team-2x">
            <h3>Media Executives</h3>
            <div className="st-team-contents">
              <TeamCard
                designation="Media Executive"
                name="Nitin Kode"
                img={nitkod}
                phone="tel:8605261826"
                mail="mailto:2019bec102@sggs.ac.in"
                linkedin="https://www.linkedin.com/in/nitin-kode-81a1291ab"
              />
              <TeamCard
                designation="Media Executive"
                name="Om Futariya"
                img={omfuta}
                phone="tel:9359858126"
                mail="mailto:2019bcs008@sggs.ac.in"
                linkedin="https://www.linkedin.com/in/om-futariya-060a95214"
              />
              <TeamCard
                designation="Media Executive"
                name="Pooja Bhoskar"
                img={poobho}
                phone="tel:7666129545"
                mail="mailto:2020bit503@sggs.ac.in"
                linkedin="https://www.linkedin.com/in/pooja-bhoskar/"
              />
            </div>
          </div>
          <div className="st-team-group st-team-2x">
            <h3>Content & Website Executives</h3>
            <div className="st-team-contents">
              <TeamCard
                designation="Content Executive"
                name="Om Futariya"
                img={omfuta}
                phone="tel:9359858126"
                mail="mailto:2019bcs008@sggs.ac.in"
                linkedin="https://www.linkedin.com/in/om-futariya-060a95214"
              />
              <TeamCard
                designation="Content Executive"
                name="Tanmay Deshmukh"
                img={tandes}
                phone="tel:9767097542"
                mail="mailto:2019bch007@sggs.ac.in"
                linkedin="www.linkedin.com/in/061200tanmaydeshmukh"
              />
            </div>
          </div>
          <div className="st-team-group st-team-2x">
            <h3>Workshop Executives</h3>
            <div className="st-team-contents">
              <TeamCard
                designation="Workshop & Departmental Coordinator"
                name="Kapil Kapse"
                img={kapkap}
                phone="tel:9356708071"
                mail="mailto:2019bec043@sggs.ac.in "
                linkedin="https://www.linkedin.com/in/kapil-kapse-410635215/"
              />
              <TeamCard
                designation="Workshop Executive"
                name="Yash Raut"
                img={yasrau}
                phone="tel:9834094712"
                mail="mailto:2020bme501@sggs.ac.in"
                linkedin="https://www.linkedin.com/in/yash-raut-236766168"
              />
            </div>
          </div>
          <div className="st-team-group st-team-2x">
            <h3>Departmental Coordinators</h3>
            <div className="st-team-contents">
              <TeamCard
                designation="Departmental Coordinator (Mech)"
                name="Akanksha Khandare"
                img={akakha}
                phone="tel:7219720955"
                mail="mailto:2019bme026@sggs.ac.in "
                linkedin="https://www.linkedin.com/in/akanksha-khandare-19265a213"
              />
              <TeamCard
                designation="Departmental Coordinator (IT)"
                name="Apeksha Shinde"
                img={apeshi}
                phone="tel:7620285139"
                mail="2020bit504@sggs.ac.in"
                linkedin="https://www.linkedin.com/in/apeksha-shinde/"
              />
              <TeamCard
                designation="Departmental Coordinator (CSE)"
                name="Hemant Sajjan"
                img={hemsaj}
                phone="tel:8855831445"
                mail="mailto:2019bcs061@sggs.ac.in"
                linkedin="https://www.linkedin.com/in/hemant-sajjan-1891341b1"
              />
              <TeamCard
                designation="Departmental Coordinator (Instru)"
                name="Hitesh Koli"
                img={hitkol}
                phone="tel:9075706930"
                mail="mailto:2019bin025@sggs.ac.in"
                linkedin="https://www.linkedin.com/in/hitesh-koli-703834218"
              />
              <TeamCard
                img={kshdha}
                name="Kshitij Dhanvij"
                designation="Departmental Coordinator (Chem)"
                phone="tel:7666298202"
                mail="mailto:2019bch005@sggs.ac.in"
                linkedin="https://www.linkedin.com/in/kshitijdhanvij0901/"
              />
              <TeamCard
                designation="Departmental Coordinator (Prod)"
                name="Pushkar Khawas"
                img={puskha}
                phone="tel:7768860281"
                mail="mailto:2019bpr035@sggs.ac.in"
                linkedin="https://www.linkedin.com/in/pushkar-khawas-14a68a199/"
              />
              <TeamCard
                designation="Departmental Coordinator (EXTC)"
                name="Rohit Garje"
                img={rohgar}
                phone="tel:9881051140"
                mail="mailto:2019bec055@sggs.ac.in"
                linkedin="https://www.linkedin.com/in/rohit-garje-a72a48192"
              />
              <TeamCard
                designation="Departmental Coordinator (Elec)"
                name="Rushikesh Solanke"
                img={russol}
                phone="tel:8806890697"
                mail="mailto:2019bel035@sggs.ac.in"
                linkedin="https://www.linkedin.com/in/rushikesh-solanke-9a243421b"
              />
              <TeamCard
                designation="Departmental Coordinator (Civil)"
                name="Sairaj Mulange"
                img={saimul}
                phone="#"
                mail="#"
                linkedin="#"
              />
              <TeamCard
                designation="Departmental Coordinator (CSE)"
                name="Samradnyi Deshpande"
                img={samdes}
                phone="tel:9373661868"
                mail="mailto:2019bcs069@sggs.ac.in"
                linkedin="https://www.linkedin.com/in/samradnyi-deshpande-339065205"
              />
              <TeamCard
                designation="Departmental Coordinator (Textile)"
                name="Shivani Sapkal"
                img={shisap}
                phone="tel:8999223205"
                mail="mailto:2019btt601@sggs.ac.in"
                linkedin="https://www.linkedin.com/in/shivani-sapkal-529b6b205"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team2122;
