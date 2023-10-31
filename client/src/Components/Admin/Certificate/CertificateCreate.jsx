import React, { useState, useRef } from "react";
import axios from "axios";

export default function CertificateCreate() {
  const [recipent, setRecipent] = useState("");
  const recipentRef = useRef(null);
  const [issued, setIssued] = useState();
  const issuedRef = useRef(null);
  const [responseStatus, setResponseStatus] = useState("");

  const buildids = async () => {
    var newuid, newucode;

    newuid = `sggs${Date.now()}`;
    newucode = await axios
      .get(`${process.env.REACT_APP_REQURL}/admin/cert/getlatest`)
      .then((res) => {
        return res.data;
      });
    newucode += 1;

    return [newuid, newucode];
  };

  const handleCertCreate = async (e) => {
    e.preventDefault();

    if (!recipentRef.current.value) {
      setResponseStatus("Please enter a recipent name.");
      return;
    }

    setRecipent(recipentRef.current.value);
    setIssued(issuedRef.current.value);
    const [newuid, newucode] = await buildids(recipent);

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_REQURL}/admin/cert/create/`,
        {
          uid: newuid,
          ucode: newucode,
          recipent,
          issued,
          created: Date.now(),
        }
      );
      setResponseStatus(
        `Status ${res.status}, certificate added successfully. Link is http://sggssplacements.in/verifycert/${res.data._id}/`
      );
    } catch (err) {
      console.log(err);
      setResponseStatus(`Error! Response status ${err.response.status}`);
    }
  };

  return (
    <>
      <div style={{ marginLeft: "20px" }} className="cert-create">
        <h4>Add Certificate Log</h4>
        <form>
          <label htmlFor="recipent">
            Recipent Name:<span style={{ color: "#f00" }}>*</span>&nbsp;
          </label>
          <input
            type="text"
            ref={recipentRef}
            placeholder="Recipent Name"
            onChange={() => {
              setResponseStatus("");
            }}
            required
          />
          <br />
          <label htmlFor="issued">Issue Date:&nbsp;</label>
          <input type="date" ref={issuedRef} />
          <p>{responseStatus}</p>
          <button onClick={handleCertCreate}>Add</button>
        </form>
      </div>
    </>
  );
}
