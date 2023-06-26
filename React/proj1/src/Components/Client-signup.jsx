import React, { useState } from "react";
import { Link } from "react-router-dom";
import Validation from "./ClientsignupValidation";
import { Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import "../Styles/Clientsignup.css";
import * as Yup from "yup";
import { Formik, Field, ErrorMessage } from "formik";

function ClientForm() {
  // const [values, setValues] = useState({
  //   name: "",
  //   address: "",
  //   contact: "",
  //   nic: "",
  //   email: "",
  //   password: "",
  // });

  // const navigate = useNavigate();

  // const [errors, setErrors] = useState({});

  // const handleInput = (event) => {
  //   setValues((prev) => ({
  //     ...prev,
  //     [event.target.name]: [event.target.value],
  //   }));
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  // const err = Validation(values); //////
  // setErrors(err);
  // if (
  //   errors.name === "" &&
  //   errors.address === "" &&
  //   errors.contact === "" &&
  //   errors.nic === "" &&
  //   errors.email === "" &&
  //   errors.password === ""
  // ) {
  //   axios.post("http://localhost:3001/clients").then((response) => {
  //     console.log("worked");
  //   });
  // {
  //   axios
  //     .post("http://localhost:8081/clientform", values) ////////
  //     .then((res) => {
  //       const token = res.data.token;
  //       localStorage.setItem("user-info", token);
  //       alert("Successfully Registered");
  //       navigate("/");
  //     })
  //     .catch((err) => console.log(err));
  // }

  const initialValues = {
    Name: "",
    Address: "",
    Contact: "",
    NIC: "",
    Email: "",
    Password: "",
  };

  // const validationSchema = Yup.object().shape({
  //   name: Yup.string().required("You must input the Name"),
  //   address: Yup.string().required("You must input the Address"),
  //   contact: Yup.string().required("You must input the Contact Details"),
  //   nic: Yup.string().required("You must input the NIC"),
  //   email: Yup.string().required("You must input the Email"),
  //   password: Yup.string()
  //     .min(3)
  //     .max(15)
  //     .required("You must input the Password"),
  // });

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/clients", data).then((response) => {
      //setlistofclients(response.data);
      console.log(response.data);
    });
  };

  return (
    <Col md={6}>
      <div className="Clientsign-box text-center p-4">
        <h1 style={{ fontFamily: "Poppins', sans-serif" }}>
          Client Registration Form
        </h1>
        <br />
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          <Form className="form">
            {/* <Form.Group controlId="Name"> */}
            <label>
              <strong> Name</strong>
              <br></br>
            </label>
            {/* <Form.Control type="text" placeholder="Enter Name" name="Name" /> */}
            <Field id="inputcreateclient" name="Name" placeholder="User Name" />
            {/* </Form.Group> */}

            {/* <Form.Group controlId="Address"> */}
            <label>
              <strong> Address</strong>
              <br></br>
            </label>
            {/* <Form.Control
                type="text"
                placeholder="Enter Address"
                name="Address"
              /> */}
            <Field
              id="inputcreateclient"
              name="Address"
              placeholder="Address"
            />
            {/* </Form.Group> */}

            {/* <Form.Group controlId="Contact"> */}
            <label>
              <strong> Contact</strong>
              <br></br>
            </label>
            {/* <Form.Control
                type="text"
                placeholder="Enter Contact Details"
                name="Contact"
              /> */}
            <Field
              id="inputcreateclient"
              name="Contact"
              placeholder="Contact"
            />
            {/* </Form.Group> */}

            {/* <Form.Group controlId="NIC"> */}
            <label>
              <strong> NIC</strong>
              <br></br>
            </label>
            {/* <Form.Control
                type="int"
                placeholder="Enter National ID number"
                name="NIC"
              /> */}
            <Field id="inputcreateclient" name="NIC" placeholder="NIC" />
            {/* </Form.Group> */}

            {/* <Form.Group controlId="Email"> */}
            <label>
              <strong> </strong>
              <br></br>
            </label>
            {/* <Form.Control
                type="email"
                placeholder="Enter email"
                name="Email"
              /> */}
            <Field id="inputcreateclient" name="Email" placeholder="Email" />
            {/* </Form.Group> */}

            <Form.Group controlId="Password">
              <Form.Label>
                <strong>Password</strong>
                <br></br>
              </Form.Label>
              {/* <Form.Control
                type="password"
                placeholder="Password"
                name="Password"
              /> */}
              <Field
                id="inputcreateclient"
                name="Password"
                placeholder="Password"
              />
            </Form.Group>
            <br />
            <Button
              variant="primary"
              type="submit"
              className="btn btn-success w-100"
            >
              Sign up
            </Button>
            <br />
            <div>
              <p>Already have an account?</p>
              <Link to="/" className="btn btn-secondary">
                Sign in
              </Link>
            </div>
          </Form>
        </Formik>
      </div>
    </Col>
  );
}

export default ClientForm;
