import React, { useState, useLayoutEffect, useContext } from "react";
import { Container } from "react-bootstrap";
import { Navbar as BSNavbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import menu from "../../img/menu.svg";
import close from "../../img/close.svg";
import { faCaretDown, faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import TNPLogo from "../../img/TNP LOGO.png";
import SGGSLogo from "../../img/sggs.png";
// import Translate from "./Translate";

import { AdminContext } from "../../App";

import { navDrops } from "../../constants";

const isLoggedIn = true;
const username = "User";

const LoginButton = () => {

  if (isLoggedIn) {
    return (
      <>
        <div className="loginbutton">
          <div style={{ marginRight: "10px" }}>
            <div style={{ fontSize: "9px" }}>Welcome,</div>
            <div style={{ fontSize: "16px" }}>{username}</div>
          </div>
          <div className="loginimg"></div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Link id="navLink" to="/user/login">
          <div className="loginbutton">
            <div>Login</div>
          </div>
        </Link>
      </>
    );
  }
};

const Drops = (props) => {
  const { title, links } = props.items;

  const [isOpen, setIsOpen] = useState(false);

  const [style, setStyle] = useState({});
  const handleMouseEnter = () => {
    setStyle({
      fontWeight: 'bold',
    })
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  return (
    <>
      <NavDropdown
        title={title}
        to='/'
        id="basic-nav-dropdown"
        className={`navDrop navDropdown-no-arrow ${props.specialNodes === undefined || '' ? '' : props.specialNodes} text-center`}
        style={style}
        show={isOpen}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={props.getProgress}
      >
        {
          links.map((item, index) => {
            return (
              <>
                <div className="flex flex-col items-center justify-center ">
                  <NavDropdown.Item key={index} as={Link} to={item.link}>{item.name === '' ? '' : item.name}</NavDropdown.Item>
                </div>
              </>
            )
          })
        }
      </NavDropdown>
    </>
  );
}

const MobileNavigation = (props) => {
  return (
    <>
      <Link onClick={props.getTouch} className={`navDrop text-xl container ${props.bdr === false ? 'border-gray-400' : 'border-b-2'} border-black my-3 mx-1 w-full `} to={props.to_} >{props.title}</Link>
    </>
  )
}

const InnerDropDowns = (props) => {
  const [activeToggle, setActive] = useState(false);

  return (
    <>
      <div className="flex flex-col my-2">
        <div className="flex items-center justify-evenly" onClick={() => {
          setActive(!activeToggle);
        }}>
          <div className="container w-11/12 mx-2 my-2 text-xl text-black border-b-2 border-black" >{props.title}</div>
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
        <div className={`${activeToggle === true ? 'block' : 'hidden'} overflow-y`}>
          {
            props.navDrops.links.map((items, index) => {
              return (
                <>
                  <div key={index} className="my-1 border-2 hover:bg-blue-300">
                    <MobileNavigation to_={items.link} bdr={false} title={items.name} getTouch={props.getTouch} />
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
    </>
  );
}

const HamburgerMenuTag = (props) => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="flex items-center justify-end flex-1 hidden mx-2 sm:block">
        <FontAwesomeIcon icon={toggle ? faCircleXmark : faBars} onClick={() => {
          setToggle(!toggle)
        }} />
      </div>
      <div className={`${!toggle ? 'hidden' : 'flex'} bg-white p-6 absolute top-20 right-4 z-10 rounded-x1 w-60 border-gray-300 rounded-md flex-col text-18`} style={{ border: '1px solid #b9b9b9' }}>
        <div className={`my-2 p-0.5 border-2 rounded-2xl flex justify-center items-center text-base nav-light-shadows`}>
          <Link onClick={props.getProgress} to='studentSection' >Student Section</Link>
        </div>
      </div>
    </>
  )
}


export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const getTouch = () => {
      setToggle(!toggle);
      getProgress();
  }

  const rootEle = useContext(AdminContext)
  const { setProgress } = rootEle;
  const getProgress = () => {
    setProgress(100);
    setTimeout(()=>{
      setProgress(0);
    },800);
  }
  return (
    <>
      <BSNavbar className="navbar" bg="light" sticky="top" >
        <Container>
          <BSNavbar.Brand id="navbar-brand" href="/">
            <img className="logo-img" src={SGGSLogo} alt="" />
            <span className="divider"></span>
            <img className="logo-img logo-mobile" src={TNPLogo} alt="" />
            &nbsp;
            <span className="logo-text">
              SHRI GURU GOBIND SINGHJI INSTITUTE<br />
              OF ENGINEERING & TECHNOLOGY{" "}
            </span>
          </BSNavbar.Brand>
        </Container>
        <Container >
          <Nav className="desktop-navmenu ms-auto">
            <Link onClick={getProgress} className="navLink" to="/">Home</Link>
            <Drops getProgress={getProgress} items={navDrops[0]} className={`navDrop`} />
            <Drops getProgress={getProgress} items={navDrops[1]} className={`navDrop`} />
            <Link onClick={getProgress} className="navLink" to="/ourTeam">Our Team</Link>
            <Link onClick={getProgress} className="navLink" to="/contactus">Contact Us</Link>

            <div className="flex justify-center items-center text-[20px] hover:cursor-pointer">
              {/* <FontAwesomeIcon icon={faBars} /> */}
              <HamburgerMenuTag />
            </div>
          </Nav>
          {/* onClick={getProgress} <Link className="navLink" to="">
              <Translate />
            </Link> */}

          {/* For Mobile View */}
          <div className="flex items-center justify-end flex-1 sm:hidden">
            <img src={toggle ? close : menu} alt="menu" className='w-[28px] object-contain cursor-pointer' onClick={() => {
              setToggle(!toggle)
            }} />
          </div>
          <div className={`${!toggle ? 'hidden' : 'flex'} bg-white p-6 absolute top-20 right-0 left-0 z-10 rounded-x1 w-full scrollable-div flex flex-col  z-[5]`}>
            <MobileNavigation getTouch={getTouch} title='Home' to_='/' />
            <InnerDropDowns getTouch={getTouch} navDrops={navDrops[0]} title={'Why SGGSIE&T'} />
            <InnerDropDowns getTouch={getTouch} navDrops={navDrops[1]} title={'For Recruiters'} />
            <MobileNavigation getTouch={getTouch} to_='ourTeam' title='Our Team' />
            <MobileNavigation getTouch={getTouch} to_='contactus' title='Contact US' />
            <MobileNavigation getTouch={getTouch} to_='studentSection' title='Student Section' />
          </div>
        </Container>
      </BSNavbar>
    </>
  );
}
