import { React, useState } from "react";
import { Formik, Form, Field } from "formik";

import axios from "axios";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Styles/Clientreg2.css";

function Clientreg2() {
  const [userType, setUserType] = useState("");
  const initialValues = {
    Name: "",
    Address: "",
    Contact: "",
    NIC: "",
    Email: "",
    Password: "",
  };

  //   const [errors, setErrors] = useState({});

  const onSubmit = (data, { resetForm }) => {
    // const err = Validation(initialValues);
    // setErrors(err);

    if (
      userType === "client"
      //   &&
      //   errors.Name === "" &&
      //   errors.Address === "" &&
      //   errors.Contact === "" &&
      //   errors.NIC === "" &&
      //   errors.Email === "" &&
      //   errors.Password === ""
    ) {
      axios.post("http://localhost:3001/clients", data).then((response) => {
        console.log(response.data);
        resetForm();
      });
    } else if (userType === "lawyer") {
      axios.post("http://localhost:3001/lawyers", data).then((response) => {
        console.log(response.data);
        resetForm();
      });
    }
  };

  return (
    <div className="main2">
      <div className=" gradient-border vh-60">
        <Container className=" vh-60">
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
                style={{
                  marginLeft: "50px",
                }}
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
                      onSubmit={onSubmit}
                    >
                      <Form className="formContainer">
                        <div className="form-group">
                          <label htmlFor="inputcreateclient" className="">
                            <strong>Name:</strong>
                          </label>

                          <br />

                          <Field
                            id="inputcreateclient"
                            name="Name"
                            placeholder="User Name"
                            className="form-control"
                          />
                          {/* {errors.Name && (
                            <span className="text-danger">{errors.Name}</span>
                          )} */}
                        </div>
                        <br></br>

                        <div className="form-group">
                          <label>
                            <strong>Address:</strong>
                          </label>
                          <br></br>

                          <Field
                            id="inputcreateclient"
                            name="Address"
                            placeholder="Address"
                            className="form-control"
                          />
                          {/* {errors.Address && (
                            <span className="text-danger">
                              {errors.Address}
                            </span>
                          )} */}
                        </div>
                        <br></br>

                        <div className="form-group">
                          <label>
                            <strong>Contact:</strong>
                          </label>
                          <br></br>

                          <Field
                            id="inputcreateclient"
                            name="Contact"
                            placeholder="Contact"
                            className="form-control"
                          />
                        </div>
                        {/* {errors.Contact && (
                          <span className="text-danger">{errors.Contact}</span>
                        )} */}
                        <br></br>

                        <div className="form-group">
                          <label>
                            <strong>NIC:</strong>
                          </label>
                          <br></br>

                          <Field
                            id="inputcreateclient"
                            name="NIC"
                            placeholder="Enter NIC Number"
                            className="form-control"
                          />
                          {/* {errors.NIC && (
                            <span className="text-danger">{errors.NIC}</span>
                          )} */}
                        </div>
                        <br></br>

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
                        </div>
                        <br></br>

                        <div className="form-group ml-3">
                          <label className="">
                            <strong>Email:</strong>
                          </label>
                          <br></br>

                          <Field
                            id="inputcreateclient"
                            name="Email"
                            placeholder="Email"
                            className="form-control"
                          />
                        </div>
                        {/* {errors.Email && (
                          <span className="text-danger">{errors.Email}</span>
                        )} */}
                        <br></br>

                        <div className="form-group">
                          <label>
                            <strong>Password:</strong>
                          </label>
                          <br></br>

                          <Field
                            id="inputcreateclient"
                            name="Password"
                            type="password"
                            placeholder="Password"
                            className="form-control"
                          />
                          {/* {errors.Password && (
                            <span className="text-danger">
                              {errors.Password}
                            </span>
                          )} */}
                        </div>
                        <br></br>
                        <br></br>

                        <Button
                          variant="primary"
                          type="submit"
                          className="btn btn-success w-100"
                        >
                          Signup
                        </Button>
                        <br></br>
                        <br></br>
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
