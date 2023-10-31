import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { AdminContext } from "../../App";
import { Link, useNavigate } from "react-router-dom";
import "./AdminSignin.css";
import TNPLogo from "../../img/TNP LOGO.png";
import axios from "axios";
import { text } from "@fortawesome/fontawesome-svg-core";

function AdminSignin() {
  const { isAdminLoggedIn, setIsAdminLoggedIn } = useContext(AdminContext);

  const userRef = useRef();
  const errorRef = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    document.title = "Sign in as Admin";
    console.log(isAdminLoggedIn);
    if (!isAdminLoggedIn) {
      userRef.current.focus();
    }
  }, []);

  useEffect(() => {
    setErrorMsg("");
  }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_REQURL}/admin/signin`,
        {
          username,
          password,
        }
      );
      console.log("logged in");

      setUsername("");
      setPassword("");
      setIsAdminLoggedIn(true);
    } catch (err) {
      console.log(err);
      switch (err.response.status) {
        case 404:
          setErrorMsg("User not found. Please enter a valid username.");
          break;
        case 401:
          setErrorMsg("Incorrect Password.");
          break;
        default:
          setErrorMsg("Some error occured. Please try again later.");
      }
    }
  };

  const SigninSuccess = () => {
    const navigate = useNavigate();
    const handleToConsole = useCallback(
      () => navigate("/admin/console/", { replace: true }),
      [navigate]
    );
    return (
      <div className="sucontainer">
        <div className="logincontainer susuccess">
          <p>Successfully logged in!</p>
          <button className="formsubmitbtn" onClick={handleToConsole}>
            Continue to Console
          </button>
          <button
            className="formsubmitbtn blankbtn"
            onClick={() => {
              setIsAdminLoggedIn(false);
            }}
          >
            Logout
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="suheader">
        <div>
          <img style={{ width: "75px", margin: "8px" }} src={TNPLogo} />
        </div>
        <div className="sutext">Sign in to T&P Admin Console</div>
      </div>
      {isAdminLoggedIn ? (
        <SigninSuccess />
      ) : (
        <div className="sucontainer">
          <div className="logincontainer">
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                value={username}
                required
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                required
              />
              <p ref={errorRef} className="a-error">
                {errorMsg}
              </p>
              <button className="formsubmitbtn">Sign In</button>
            </form>
          </div>
        </div>
      )}
      <div className="container sufooter" style={{
        textAlign: "center"
      }}>
        <Link to="/"><button>Back to Home</button></Link>.
      </div>
    </>
  );
}

export default AdminSignin;
