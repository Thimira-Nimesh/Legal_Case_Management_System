import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "../Styles/Cases.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Cases() {
  const [stateVariable, setStateVariable] = useState();
  const [clientIds, setClientIds] = useState([]);
  const [selectedLawyerID, setSelectedLawyerID] = useState(null);
  const [selectedClientID, setSelectedClientID] = useState(null);
  const [lawyers, setLawyers] = useState([]);

  const navigate = useNavigate();
  const initialValues = {
    CaseCode: "",
    CaseTitle: "",
    CaseFile: "",
    CaseLawyer: "",
    CaseOwner: "",
  };

  const validationSchema = Yup.object().shape({
    CaseCode: Yup.string().max(10).required(),
    CaseTitle: Yup.string().required(),
    CaseFile: Yup.string().min(20).required(),
    // CaseLawyer: Yup.string().required(),
  });

  const onSubmit = (data) => {
    const dt = {
      ...data,
      UserId: selectedClientID,
      CaseLawyer: selectedLawyerID,
    };

    axios
      .post("http://localhost:3001/cases", dt, {
        headers: { accessToken: localStorage.getItem("accessToken") },
      })
      .then((response) => {
        console.log("It worked");
        alert("Case Added Successfully");
        navigate("/");
      });
  };

  function viewcases() {
    navigate("/");
  }

  useEffect(() => {
    // Fetch client IDs from the backend API
    axios
      .get("http://localhost:3001/auth/a")
      .then((response) => {
        console.log(response.data);
        setStateVariable(response.data);
        const clients = response.data.filter(
          (user) => user.usertype === "client"
        );
        setClientIds(clients);
      })
      .catch((error) => {
        console.error("Error fetching client IDs:", error);
      });

    // Fetch lawyers from the backend API
    axios
      .get("http://localhost:3001/auth/a")
      .then((response) => {
        const lawyers = response.data.filter(
          (user) => user.usertype === "lawyer"
        );
        setLawyers(lawyers);
      })
      .catch((error) => {
        console.error("Error fetching lawyer IDs:", error);
      });
  }, []);

  return (
    <div>
      <div>
        <button onClick={viewcases}>View Current Cases</button>
      </div>
      <div className="createcasepage">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form className="submitformContainer">
            <label>
              <strong>Case Code:</strong>{" "}
            </label>
            <Field
              id="inputCreateCase"
              name="CaseCode"
              placeholder="Case Code...."
            />
            <ErrorMessage name="CaseCode" component="span" />

            <label>
              <strong>Case Title: </strong>
            </label>
            <Field
              id="inputCreateCase"
              name="CaseTitle"
              placeholder="Case Title...."
            />
            <ErrorMessage name="CaseTitle" component="span" />

            <label>
              <strong>Case Description: </strong>
            </label>
            <Field
              id="inputCreateCase"
              name="CaseFile"
              placeholder="Case Description...."
            />
            <ErrorMessage name="CaseFile" component="span" />

            <label>
              <strong>Assigned Lawyer:</strong>{" "}
            </label>
            <Field
              id="inputCreateCase"
              as="select"
              name="CaseLawyer"
              placeholder="Assigned Lawyer...."
              onChange={(e) => setSelectedLawyerID(e.target.value)}
              value={selectedLawyerID}
            >
              <option value="">Select a lawyer</option>
              {lawyers.map((lawyer) => (
                <option key={lawyer.UserId} value={lawyer.UserId}>
                  {lawyer.username}
                </option>
              ))}
            </Field>

            {/* Dropdown for selecting the client */}
            <label>
              <strong>Select Client:</strong>{" "}
            </label>
            <Field
              id="inputCreateCase"
              as="select"
              name="clientId"
              onChange={(e) => setSelectedClientID(e.target.value)}
            >
              <option value="">Select a client</option>
              {clientIds.map((client) => (
                <option key={client.UserId} value={client.UserId}>
                  {client.username}
                </option>
              ))}
            </Field>
            <ErrorMessage name="clientId" component="span" />
            <button type="submit">Add Case</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
