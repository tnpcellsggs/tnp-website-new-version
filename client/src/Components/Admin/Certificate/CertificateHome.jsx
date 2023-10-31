import React from "react";
import CertificateList from "./CertificateList";
import CertificateCreate from "./CertificateCreate";

function CertificateHome() {
  return (
    <div style={{ marginLeft: "40px" }}>
      <h2>Certificate Verification</h2>
      <CertificateList />
      <CertificateCreate />
    </div>
  );
}

export default CertificateHome;
