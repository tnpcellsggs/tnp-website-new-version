import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function CertificateList() {
  const [certlist, setCertlist] = useState([
    { uid: "-", recipent: "-", issued: 0, created: 0 },
  ]);
  const [isListRefreshing, setIsListRefreshing] = useState(false);
  const tableHeaders = [
    "Unique URL ID",
    "Recipent",
    "Issue Date",
    "Entry Date",
    "Del",
  ];

  useEffect(() => {
    const fetchCertList = async () => {
      try {
        let res = await axios.get(
          `${process.env.REACT_APP_REQURL}/admin/cert/getall/`
        );
        setCertlist(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCertList();
    setIsListRefreshing(false);
  }, [isListRefreshing]);

  const handleCertDelete = async (uid) => {
    try {
      let res = await axios.post(
        `${process.env.REACT_APP_REQURL}/admin/cert/delete/`,
        {
          uid,
        }
      );
      res.status === 200 && setIsListRefreshing(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="cert-list" style={{ marginLeft: "20px" }}>
        <h4>Existing Certificates</h4>
        <table>
          <tbody>
              <tr>
                <th>Unique URL ID</th>
                <th>Recipent</th>
                <th>Issue Date</th>
                <th>Entry Date</th>
                <th>Delete</th>
              </tr>
            {certlist.map((i) => {
              return (
                <tr key={i._id}>
                  <td>{i._id}</td>
                  <td>{i.recipent}</td>
                  <td>
                    {i.issued
                      ? new Date(i.issued).toLocaleDateString("en-gb", {
                        weekday: "long",
                        year: "numeric",
                        month: "numeric",
                        day: "numeric",
                      })
                      : "-"}
                  </td>
                  <td>
                    {new Date(i.created).toLocaleDateString("en-gb", {
                      weekday: "long",
                      year: "numeric",
                      month: "numeric",
                      day: "numeric",
                    })}
                  </td>
                  <td>
                    <FontAwesomeIcon
                      icon={faTrash}
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        handleCertDelete(i.uid);
                      }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button
          onClick={() => {
            setIsListRefreshing(true);
          }}
        >
          Refresh List
        </button>
      </div>
    </>
  );
}
