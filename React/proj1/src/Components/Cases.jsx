import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "../Styles/Cases.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Cases() {
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
    CaseLawyer: Yup.string().required(),
    CaseOwner: Yup.string().required(),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/cases", data).then((response) => {
      console.log("It worked");
      alert("Case Added Successfully");
      navigate("/");
    });
  };

  function viewcases() {
    navigate("/");
  }

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
            <label>Case Code: </label>
            <Field
              id="inputCreateCase"
              name="CaseCode"
              placeholder="Case Code...."
            />
            <ErrorMessage name="CaseCode" component="span" />

            <label>Case Title: </label>
            <Field
              id="inputCreateCase"
              name="CaseTitle"
              placeholder="Case Title...."
            />
            <ErrorMessage name="CaseTitle" component="span" />

            <label>Case Description: </label>
            <Field
              id="inputCreateCase"
              name="CaseFile"
              placeholder="Case Description...."
            />
            <ErrorMessage name="CaseFile" component="span" />

            <label>Assigned Lawyer: </label>
            <Field
              id="inputCreateCase"
              name="CaseLawyer"
              placeholder="Assigned Lawyer...."
            />
            <ErrorMessage name="CaseLawyer" component="span" />

            <label>Case Owner: </label>
            <Field
              id="inputCreateCase"
              name="CaseOwner"
              placeholder="Case Owner..."
            />
            <ErrorMessage name="CaseOwner" component="span" />

            <button type="submit">Add Case</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
