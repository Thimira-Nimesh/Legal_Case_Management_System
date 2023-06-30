import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
import axios from "axios";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Clientreg2.css";
import "../Components/ClientsignupValidation";

function Clientreg2() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("");
  const initialValues = {
    name: "",
    address: "",
    contact: "",
    nic: "",
    email: "",
    username: "",
    password: "",
  };

  //   const validationSchema = Yup.object({
  //     name: Yup.string().required("Name is required"),
  //     address: Yup.string().required("Address is required"),
  //     contact: Yup.string().required("Contact is required"),
  //     nic: Yup.string().required("NIC is required"),
  //     // userType: Yup.string().required("User Type is required"),
  //     email: Yup.string()
  //       .email("Invalid email address")
  //       .required("Email is required"),
  //     password: Yup.string().required("Password is required"),
  //   });

  const onSubmit = (data, { resetForm }) => {
    if (userType === "client") {
      axios.post("http://localhost:3001/auth", data).then((response) => {
        console.log(response.data);
        resetForm();
        navigate("/login");
      });
    } else if (userType === "lawyer") {
      axios.post("http://localhost:3001/clients", data).then((response) => {
        console.log(response.data);
        resetForm();
        navigate("/login");
      });
    }
  };

  return (
    <div className="main2">
      <div className="gradient-border vh-60">
        <Container className="vh-60">
          <Row className="justify-content-center">
            <Col md={6}>
              <div className="loginlogo w-45">
                <img
                  width="500"
                  src="https://i.ibb.co/HgB9sQM/Screenshot-2023-06-05-194339-removebg-preview.png"
                  alt="Img"
                  className="img-fluid2"
                />
              </div>
            </Col>
            <Col md={6}>
              <div
                className="Clientsign-box text-left p-1"
                style={{ marginLeft: "50px" }}
              >
                <h1
                  className="text-center mt-4"
                  style={{ fontFamily: "Poppins', sans-serif" }}
                >
                  Registration Form
                </h1>
                <br />
                <div className="ml-8">
                  <div className="createclientpage">
                    <Formik
                      initialValues={{ ...initialValues, userType: "" }}
                      //   validationSchema={validationSchema}
                      onSubmit={onSubmit}
                    >
                      <Form className="formContainer">
                        <div className="form-group">
                          <label htmlFor="inputcreateclient">
                            <strong>Name:</strong>
                          </label>
                          <br />
                          <Field
                            id="inputcreateclient"
                            name="name"
                            placeholder="Name"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="name"
                            component="div"
                            className="error"
                          />
                        </div>
                        <br />

                        <div className="form-group">
                          <label>
                            <strong>Address:</strong>
                          </label>
                          <br />
                          <Field
                            id="inputcreateclient"
                            name="address"
                            placeholder="Address"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="address"
                            component="div"
                            className="error"
                          />
                        </div>
                        <br />

                        <div className="form-group">
                          <label>
                            <strong>Contact:</strong>
                          </label>
                          <br />
                          <Field
                            id="inputcreateclient"
                            name="contact"
                            placeholder="Contact"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="contact"
                            component="div"
                            className="error"
                          />
                        </div>
                        <br />

                        <div className="form-group">
                          <label>
                            <strong>NIC:</strong>
                          </label>
                          <br />
                          <Field
                            id="inputcreateclient"
                            name="nic"
                            placeholder="Enter NIC Number"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="nic"
                            component="div"
                            className="error"
                          />
                        </div>
                        <br />

                        <div className="form-group">
                          <label>
                            <strong>User Type:</strong>
                          </label>
                          <br />
                          <select
                            id="inputcreateclient"
                            name="userType"
                            value={userType}
                            onChange={(e) => setUserType(e.target.value)}
                            className="form-control"
                          >
                            <option value="">Select User Type</option>
                            <option value="client">Client</option>
                            <option value="lawyer">Lawyer</option>
                          </select>
                          <ErrorMessage
                            name="userType"
                            component="div"
                            className="error"
                          />
                        </div>
                        <br />

                        <div className="form-group ml-3">
                          <label>
                            <strong>Email:</strong>
                          </label>
                          <br />
                          <Field
                            id="inputcreateclient"
                            name="email"
                            placeholder="Email"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="error"
                          />
                        </div>
                        <br />

                        <div className="form-group">
                          <label>
                            <strong>Username:</strong>
                          </label>
                          <br />
                          <Field
                            id="inputcreateclient"
                            name="username"
                            placeholder="Username"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="username"
                            component="div"
                            className="error"
                          />
                        </div>
                        <br></br>

                        <div className="form-group">
                          <label>
                            <strong>Password:</strong>
                          </label>
                          <br />
                          <Field
                            id="inputcreateclient"
                            name="password"
                            type="password"
                            placeholder="Password"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="password"
                            component="div"
                            className="error"
                          />
                        </div>
                        <br />
                        <br />

                        <Button
                          variant="primary"
                          type="submit"
                          className="btn btn-success w-100"
                        >
                          Signup
                        </Button>
                        <br />
                        <br />
                        <div>
                          <p>Already have an account?</p>
                          <Link to="/login" className="btn btn-secondary">
                            Sign in
                          </Link>
                        </div>
                      </Form>
                    </Formik>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Clientreg2;
