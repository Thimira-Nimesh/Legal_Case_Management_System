import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "../Styles/Test.css";
import { useNavigate } from "react-router-dom";

function Test() {
  const [listofcases, setlistofcases] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/cases").then((response) => {
      setlistofcases(response.data);
    });
  }, []);

  return (
    <div className="Test1">
      {listofcases.map((value, key) => {
        return (
          <div
            className="cases"
            onClick={() => {
              navigate(`/viewcase/${value.id}`);
            }}
          >
            <div className="casetitle">Code: {value.CaseCode}</div>
            <div className="body1">Case Title: {value.CaseTitle}</div>
            <div className="body">Description: {value.CaseFile}</div>
            <div className="body2">Assigned Lawyer:{value.CaseLawyer}</div>
            <div className="body3">Case Owner: {value.CaseOwner}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Test;
