import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./JudgesignupValidation";
import { Col, Form, Button } from "react-bootstrap";
import axios from "axios";

function JudgeForm() {
  const [values, setValues] = useState({
    fname: "",
    lname: "",
    address: "",
    nic: "",
    judgenum: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const err = Validation(values);
    setErrors(err);
    if (
      errors.fname === "" &&
      errors.lname === "" &&
      errors.address === "" &&
      errors.nic === "" &&
      errors.judgenum === "" &&
      errors.email === "" &&
      errors.password === ""
    ) {
      axios
        .post("http://localhost:8081/judgeform", values)
        .then((res) => {
          alert("Successfully Registered");
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <Col md={0}>
      <div className="judgesign-box  p-4">
        <h1 style={{ fontFamily: "Poppins', sans-serif" }}>
          Judge Registration Form
        </h1>
        <br />
        <Form className="form" action="" onSubmit={handleSubmit}>
          <Form.Group controlId="fname">
            <Form.Label>
              <strong>First Name</strong>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter First Name"
              name="fname"
              onChange={handleInput}
            />
            {errors.fname && (
              <span className="text-danger">{errors.fname}</span>
            )}
          </Form.Group>
          <Form.Group controlId="lname">
            <Form.Label>
              <strong>Last Name</strong>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Last Name"
              name="lname"
              onChange={handleInput}
            />
            {errors.lname && (
              <span className="text-danger">{errors.lname}</span>
            )}
          </Form.Group>

          <Form.Group controlId="address">
            <Form.Label>
              <strong>Address</strong>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Address"
              name="address"
              onChange={handleInput}
            />
            {errors.address && (
              <span className="text-danger">{errors.address}</span>
            )}
          </Form.Group>

          <Form.Group controlId="nic">
            <Form.Label>
              <strong>National ID Number</strong>
            </Form.Label>
            <Form.Control
              type="int"
              placeholder="Enter National ID number"
              name="nic"
              onChange={handleInput}
            />
            {errors.nic && <span className="text-danger">{errors.nic}</span>}
          </Form.Group>

          <Form.Group controlId="judgenum">
            <Form.Label>
              <strong>Judge Number</strong>
            </Form.Label>
            <Form.Control
              type="varchar"
              placeholder="Enter Judge number"
              name="judgenum"
              onChange={handleInput}
            />
            {errors.judgenum && (
              <span className="text-danger">{errors.judgenum}</span>
            )}
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>
              <strong>Email address</strong>
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={handleInput}
            />
            {errors.email && (
              <span className="text-danger">{errors.email}</span>
            )}
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>
              <strong>Password</strong>
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleInput}
            />
            {errors.password && (
              <span className="text-danger">{errors.password}</span>
            )}
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
      </div>
    </Col>
  );
}

export default JudgeForm;
