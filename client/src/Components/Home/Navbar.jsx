// import React, { useState, useContext } from "react";
// import { AdminContext } from "../../App";
// import { navDrops } from "../../constants";
// import { Link } from "react-router-dom";
// import menu from "../../img/menu.svg";
// import close from "../../img/close.svg";
// import { Container } from "react-bootstrap";
// import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Navbar as BSNavbar, Nav, NavDropdown } from "react-bootstrap";

// import TNPLogo from "../../img/TNP LOGO.png";
// import SGGSLogo from "../../img/sggs.png";
// // import Translate from "./Translate";
// // import { faCaretDown, faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons";



// // const isLoggedIn = true;
// // const username = "User";

// // const LoginButton = () => {

// //   if (isLoggedIn) {
// //     return (
// //       <>
// //         <div className="loginbutton">
// //           <div style={{ marginRight: "10px" }}>
// //             <div style={{ fontSize: "9px" }}>Welcome,</div>
// //             <div style={{ fontSize: "16px" }}>{username}</div>
// //           </div>
// //           <div className="loginimg"></div>
// //         </div>
// //       </>
// //     );
// //   } else {
// //     return (
// //       <>
// //         <Link id="navLink" to="/user/login">
// //           <div className="loginbutton">
// //             <div>Login</div>
// //           </div>
// //         </Link>
// //       </>
// //     );
// //   }
// // };

// const Drops = (props) => {
//   const { title, links } = props.items;
//   const [isOpen, setIsOpen] = useState(false);

//   const [style, setStyle] = useState({});
//   const handleMouseEnter = () => {
//     setStyle({
//       fontWeight: 'bold',
//     })
//     setIsOpen(true);
//   };

//   const handleMouseLeave = () => {
//     setIsOpen(false);
//   };
//   return (
//     <>
//       <NavDropdown
//         title={title}
//         to='/'
//         id="basic-nav-dropdown"
//         className={`navDrop navDropdown-no-arrow ${props.specialNodes === undefined || '' ? '' : props.specialNodes} text-center`}
//         style={style}
//         show={isOpen}
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         onClick={props.getProgress}
//       >
//         {
//           links.map((item, index) => {
//             return (
//               <div key={index + item.link + Math.random()} className="flex flex-col items-center justify-center ">
//                 <NavDropdown.Item as={Link} to={item.link} className='md:text-[12px] lg:text-base'>{item.name === '' ? '' : item.name}</NavDropdown.Item>
//               </div>

//             )
//           })
//         }
//       </NavDropdown>
//     </>
//   );
// }

// const MobileNavigation = (props) => {
//   return (
//     <>
//       <Link onClick={props.getTouch} className={`navDrop text-xl container ${props.bdr === false ? 'border-gray-400' : 'border-b-2'} border-black my-3 mx-1 w-full `} to={props.to_} >{props.title}</Link>
//     </>
//   )
// }

// const InnerDropDowns = (props) => {
//   const [activeToggle, setActive] = useState(false);

//   return (
//     <>
//       <div className="flex flex-col my-2">
//         <div className="flex items-center justify-evenly" onClick={() => {
//           setActive(!activeToggle);
//         }}>
//           <div className="container w-11/12 mx-2 my-2 text-xl text-black border-b-2 border-black" >{props.title}</div>
//           <FontAwesomeIcon icon={faCaretDown} />
//         </div>
//         <div className={`${activeToggle === true ? 'block' : 'hidden'} overflow-y`}>
//           {
//             props.navDrops.links.map((items, index) => {
//               return (
//                 <div key={index + items.link + Math.random()} className="my-1 border-2 hover:bg-blue-300">
//                   <MobileNavigation to_={items.link} bdr={false} title={items.name} getTouch={props.getTouch} />
//                 </div>

//               )
//             })
//           }
//         </div>
//       </div>
//     </>
//   );
// }

// // const HamburgerMenuTag = (props) => {
// //   const [toggle, setToggle] = useState(false);
// //   return (
// //     <>
// //       <div className="flex items-center justify-end flex-1 hidden mx-2 sm:block">
// //         <FontAwesomeIcon icon={toggle ? faCircleXmark : faBars} onClick={() => {
// //           setToggle(!toggle)
// //         }} />
// //       </div>
// //       <div className={`${!toggle ? 'hidden' : 'flex'} bg-white p-6 absolute top-20 right-4 z-10 rounded-x1 w-60 border-gray-300 rounded-md flex-col text-18`} style={{ border: '1px solid #b9b9b9' }}>
// //         <div className={`my-2 p-0.5 border-2 rounded-2xl flex justify-center items-center text-base nav-light-shadows`}>
// //           <Link onClick={props.getProgress} to='studentSection' >Student Section</Link>
// //         </div>
// //       </div>
// //     </>
// //   )
// // }


// export default function Navbar() {
//   const [toggle, setToggle] = useState(false);
//   const getTouch = () => {
//     setToggle(!toggle);
//     getProgress();
//   }

//   const rootEle = useContext(AdminContext)
//   const { setProgress } = rootEle;
//   const getProgress = () => {
//     setProgress(100);
//     setTimeout(() => {
//       setProgress(0);
//     }, 800);
//   }
//   return (
//     <>
//       <BSNavbar className="navbar justify-between" bg="light" sticky="top" >
      
//         <Container>
//           <BSNavbar.Brand id="navbar-brand justify-between" href="/">
//             <img className="logo-img" src={SGGSLogo} alt="logo" />
//             <span className="divider"></span>
//             <img className="logo-img logo-mobile" src={TNPLogo} alt="img-logo" />
//             &nbsp;
//             <span className="logo-text md:text-sm lg:text-xl sm:text-xl">
//               SHRI GURU GOBIND SINGHJI INSTITUTE<br />
//               OF ENGINEERING & TECHNOLOGY{" "}
//             </span>
//           </BSNavbar.Brand>
//         </Container>
//         <Container >

//           <Nav className="desktop-navmenu ms-auto ">
//             <Link onClick={getProgress} className="navLink" to="/">Home</Link>
//             <Link onClick={getProgress} className="navLink" to="/placements">Placements</Link>
//             <Drops getProgress={getProgress} items={navDrops[0]} className={`navDrop`} />
//             <Drops getProgress={getProgress} items={navDrops[1]} className={`navDrop`} />
//             <Link onClick={getProgress} className="navLink" to="/contactus">Contact Us</Link>

//             {/* Hamburger containing the student section */}
//             {/* <div className="flex justify-center items-center text-[20px] hover:cursor-pointer">
//               <HamburgerMenuTag />
//             </div> */}
//           </Nav>
          

//           {/* onClick={getProgress} <Link className="navLink" to="">
//               <Translate />
//             </Link> */}

//           {/* For Mobile View */}
//           <div className="flex items-center justify-end flex-1 sm:hidden">
//             <img src={toggle ? close : menu} alt="menu" className='w-[28px] object-contain cursor-pointer' onClick={() => {
//               setToggle(!toggle)
//             }} />
//           </div>

//           <div className={`${!toggle ? 'hidden' : 'flex'} bg-white p-6 absolute top-20 right-0 left-0 z-10 rounded-x1 w-full scrollable-div flex flex-col `}>
//             <MobileNavigation getTouch={getTouch} title='Home' to_='/' />
//             <MobileNavigation getTouch={getTouch} to_='placements' title='Placements' />
//             <InnerDropDowns getTouch={getTouch} navDrops={navDrops[0]} title={'Why SGGSIE&T'} />
//             <InnerDropDowns getTouch={getTouch} navDrops={navDrops[1]} title={'For Recruiters'} />
//             {/* <MobileNavigation getTouch={getTouch} to_='studentSection' title='Student Section' /> */}
//             <MobileNavigation getTouch={getTouch} to_='contactus' title='Contact US' />
//           </div>
//         </Container>
//       </BSNavbar>
//     </>
//   );
// }
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AdminContext } from "../../App";
import { navDrops } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import TNPLogo from "../../img/TNP LOGO.png";
import SGGSLogo from "../../img/sggs.png";

const DropdownItem = ({ item, getProgress, isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className={`relative ${isMobile ? 'w-full' : 'inline-block'}`}>
      <button
        className={`font-medium ${isMobile ? 'w-full text-left py-2 px-4' : 'hover:text-gray-600'}`}
        onClick={toggleDropdown}
      >
        {item.title}
        <FontAwesomeIcon icon={faCaretDown} className={`ml-2 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className={`bg-white shadow-lg border rounded ${isMobile ? 'w-full' : 'absolute mt-2 w-48'}`}>
          {item.links.map((link, index) => (
            <Link
              key={index}
              to={link.link}
              className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
              onClick={() => {
                getProgress();
                toggleDropdown();
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const NavItem = ({ item, getProgress, isMobile }) => {
  if (item.links) {
    return <DropdownItem item={item} getProgress={getProgress} isMobile={isMobile} />;
  }
  return (
    <Link
      to={item.link || '/'}
      className={`text-black hover:text-gray-600 ${isMobile ? 'block w-full py-2 px-4' : ''}`}
      onClick={getProgress}
    >
      {item.title}
    </Link>
  );
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setProgress } = useContext(AdminContext);

  const getProgress = () => {
    setProgress(100);
    setTimeout(() => setProgress(0), 800);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    getProgress();
  };

  const navItems = [
    { title: "Home", link: "/" },
    { title: "Placements", link: "/placements" },
    navDrops[0],
    navDrops[1],
    { title: "Contact Us", link: "/contactus" }
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center" onClick={getProgress}>
              <a href="https://sggs.ac.in/"> <img src={SGGSLogo} alt="SGGS Logo" className="h-8 w-auto" /></a>
              <img src={TNPLogo} alt="TNP Logo" className="h-8 w-auto ml-2" />
              <span className="ml-2 text-sm sm:text-base lg:text-lg font-semibold text-gray-900 hidden sm:inline-block">
                SHRI GURU GOBIND SINGHJI INSTITUTE
                <br />
                OF ENGINEERING & TECHNOLOGY
              </span>
            </Link>
          </div>
          <div className="hidden sm:flex items-center space-x-4">
            {navItems.map((item, index) => (
              <NavItem key={index} item={item} getProgress={getProgress} />
            ))}
          </div>
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="pt-2 pb-3 space-y-1">
          {navItems.map((item, index) => (
            <NavItem key={index} item={item} getProgress={getProgress} isMobile={true} />
          ))}
        </div>
      </div>
    </nav>
  );
}