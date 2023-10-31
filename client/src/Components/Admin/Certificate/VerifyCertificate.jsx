import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import TNPLogo from "../../../img/TNP LOGO.png";
import axios from "axios";

export default function VerifyCertificate() {
  let { uniqueid } = useParams();
  const [isValidId, setIsValidId] = useState(false);
  const [isResSuccess, setIsResSuccess] = useState(false);
  const [recipent, setRecipent] = useState("");
  const [uid, setUid] = useState("");
  const [ucode, setUcode] = useState();

  useEffect(() => {
    document.title = "Verify Certificate | TnPCell SGGS";
    const checkuid = async () => {
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_REQURL}/admin/cert/verify/`,
          {
            uniqueid,
          }
        );
        setIsValidId(true);
        res.status === 200 ? setIsResSuccess(true) : setIsResSuccess(false);
        setRecipent(res.data.recipent);
        setUcode(res.data.ucode);
        setUid(res.data.uid);
      } catch (err) {
        console.log(err);
      }
    };
    const regexp = /^[0-9a-fA-F]+$/;
    if (regexp.test(uniqueid) && uniqueid.length === 24) {
      checkuid();
    } else {
      setIsValidId(false);
    }
    regexp.lastIndex = 0;
  }, []);

  return (
    <>
      <div className="minimalnav">
        <img src={TNPLogo} />
        TNPCell, SGGS Nanded
      </div>
      <div className="minimalsubnav">
        <Link to="/">Visit main site</Link>
      </div>
      {isValidId ? (
        <div className="verifycert-container">
          <div className="verifycert-card">
            {isResSuccess ? (
              <div className="response text-green">Certificate Found!</div>
            ) : (
              <div className="response text-red">Certificate not found.</div>
            )}
            <div>Recipent Name: {recipent}</div>
            <div>Verification Code: {ucode}</div>
            <div>Certificate ID: {uid}</div>
          </div>
        </div>
      ) : (
        <div>QR Code/URL error</div>
      )}
      <div className="copyright">
        copyright @2021 SGGSIE&T. All Rights Reserved.
      </div>
    </>
  );
}
