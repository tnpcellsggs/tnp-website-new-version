import React, { useCallback, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import TNPLogo from "../../img/TNP LOGO.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { AdminContext } from "../../App";
import "./AdminStyles.css";

export default function AdminNavbar() {
  const { setIsAdminLoggedIn } = useContext(AdminContext);
  const navigate = useNavigate();
  const handleLogout = useCallback(() => {
    setIsAdminLoggedIn(false);
    navigate("/", { replace: true });
  }, [navigate]);
  return (
    <>
      <div className="admin-navbar">
        <div>
          <img src={TNPLogo} alt="tnp logo" />
        </div>
        <div className="title">Training & Placement Cell</div>
        <div className="subtitle">Admin Console</div>
      </div>
      <div className="admin-sticky">
        <Link className="backbtn" to="/">
          <FontAwesomeIcon icon={faHome} />
        </Link>
        <ul>
          <li>
            <NavLink
              to="./"
              style={({ isActive }) =>
                isActive ? { color: "#2af" } : { color: "#fff" }
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="./events/"
              style={({ isActive }) =>
                isActive ? { color: "#2af" } : { color: "#fff" }
              }
            >
              Manage Events
            </NavLink>
          </li>
          <li >
            <NavLink
              to="./cert/"
              style={({ isActive }) =>
                isActive ? { color: "#2af" } : { color: "#fff" }
              }
            >
              Certificate Verification
            </NavLink>
          </li>
          <li >
            <NavLink
              to="./yearwise"
              style={({ isActive }) =>
                isActive ? { color: "#2af" } : { color: "#fff" }
              }
            >
              YearWise Placements
            </NavLink>
          </li>
          <li >
            <NavLink
              to="./graphrecords"
              style={({ isActive }) =>
                isActive ? { color: "#2af" } : { color: "#fff" }
              }
            >
              Graph Records
            </NavLink>
          </li>
          <li >
            <NavLink
              to="./deptwise"
              style={({ isActive }) =>
                isActive ? { color: "#2af" } : { color: "#fff" }
              }
            >
              Department Wise Placements
            </NavLink>
          </li>
          <li>
            <div
              style={{
                backgroundColor: "var(--primary-blue)",
                padding: "2px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
              onClick={handleLogout}
            >
              Logout
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
